(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const B = document.body, PAGE = B.dataset.page, L = B.dataset.lang, R = B.dataset.root;
const U = window.UI, T = window.TOPICS, P = window.PROVINCES, RG = window.REGIONS, TY = window.TYPES, SL = window.SLUGS, WIKI = window.WIKI || {};
const byId = Object.fromEntries(P.map(p=>[p.id,p]));
const esc = s => String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tpl = (s,o) => s.replace(/\{(\w+)\}/g,(m,k)=>(o[k]!==undefined?o[k]:m));
const provUrl = id => `${R}${L}/provinces/${SL[id]}/`;

/* storage */
const store = {
  get(k,d){ try{ const v = localStorage.getItem("hx_"+k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem("hx_"+k, JSON.stringify(v)); }catch(e){} }
};
try{ localStorage.setItem("hx_lang", L); }catch(e){}
let visited = store.get("visited", []), stars = store.get("stars", []), best = store.get("best", {});

/* terms */
const TERM = /\{([^|{}]+)\|([^|{}]+)\|([^{}]+)\}/g;
const fmt = s => esc(s).replace(TERM,(m,hz,py,tr)=>`<span class="term" tabindex="0" data-say="${hz}"><span class="t-hz">${hz}</span><span class="t-py">${py}</span> <span class="t-tr">(${tr})</span></span>`);

/* speech */
let zhVoice = null;
function pickVoice(){ if(!("speechSynthesis" in window)) return; const vs = speechSynthesis.getVoices();
  zhVoice = vs.find(v=>/zh[-_]CN/i.test(v.lang)) || vs.find(v=>/^zh/i.test(v.lang)) || null; }
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, el){
  if(!("speechSynthesis" in window)){ toast(U.noTTS); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "zh-CN"; u.rate = .8; if(zhVoice) u.voice = zhVoice;
  if(el){ el.classList.add("speaking"); u.onend = u.onerror = ()=>el.classList.remove("speaking"); }
  speechSynthesis.speak(u);
  if(!zhVoice && speechSynthesis.getVoices().length) toast(U.noVoice);
}
document.addEventListener("click", e=>{ const t = e.target.closest("[data-say]"); if(t){ e.preventDefault(); say(t.dataset.say, t); } });
document.addEventListener("keydown", e=>{ if(e.key==="Enter" && e.target.matches && e.target.matches(".term")) say(e.target.dataset.say, e.target); });
let toastT;
function toast(msg){
  let el = $("#toast");
  if(!el){ el = document.createElement("div"); el.id = "toast";
    el.style.cssText = "position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#1c1a19;color:#fff;padding:10px 16px;border-radius:10px;z-index:99;font-size:14px;max-width:90vw;text-align:center;transition:opacity .3s";
    document.body.appendChild(el); }
  el.textContent = msg; el.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(()=>el.style.opacity = 0, 3200);
}

/* photos from Wikipedia */
const imgCache = store.get("img4", {});
async function wikiImg(article, lang){
  const key = lang+":"+article;
  if(imgCache[key] !== undefined) return imgCache[key];
  try{
    const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/`+encodeURIComponent(article));
    if(!r.ok) throw 0;
    const j = await r.json(); let res = null;
    if(j.thumbnail && j.thumbnail.source){
      const ow = (j.originalimage && j.originalimage.width) || 0, thumb = j.thumbnail.source;
      let src = thumb;   // Wikimedia serves only standard thumbnail widths (…330, 500, 960, 1280…)
      if(/\/\d+px-/.test(thumb) && ow > 960) src = thumb.replace(/\/\d+px-/, "/960px-");
      else if(j.originalimage && ow <= 960) src = j.originalimage.source;
      const page = (j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page) || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(article)}`;
      res = {src, thumb, page};
    }
    imgCache[key] = res; store.set("img4", imgCache); return res;
  }catch(e){ return null; }
}
function loadPhotos(root){
  $$("[data-wiki],[data-zh]", root).forEach(async el=>{
    if(el.dataset.done || el.tagName==="BUTTON") return; el.dataset.done = 1;
    let res = null;
    if(el.dataset.wiki) res = await wikiImg(el.dataset.wiki, "en");
    if(!res && el.dataset.zh) res = await wikiImg(el.dataset.zh, "zh");
    if(!res){ el.classList.add("noimg"); return; }
    const im = new Image();
    im.onload = ()=>{ el.style.backgroundImage = `url("${res.src}")`; el.classList.add("ok"); el.dataset.full = res.src; el.dataset.page = res.page;
      const c = el.parentElement && el.parentElement.querySelector(":scope > .credit");
      if(c) c.innerHTML = `${U.photo}: <a href="${res.page}" target="_blank" rel="noopener">Wikipedia / Wikimedia Commons</a>`; };
    im.onerror = ()=>{ if(res.thumb && im.src !== res.thumb){ res.src = res.thumb; im.src = res.thumb; } else el.classList.add("noimg"); };
    im.src = res.src;
  });
}
document.addEventListener("click", e=>{
  const el = e.target.closest(".im.ok"); if(!el || e.target.closest(".term") || el.closest("a")) return;
  const lb = document.createElement("div"); lb.className = "lb";
  lb.innerHTML = `<figure><img src="${el.dataset.full}" alt=""><figcaption>${esc(el.dataset.cap||"")} · <a href="${el.dataset.page}" target="_blank" rel="noopener">${U.photoSrc}</a></figcaption></figure><button aria-label="×">×</button>`;
  lb.onclick = ev=>{ if(!ev.target.closest("a")) lb.remove(); };
  document.body.appendChild(lb);
});
document.addEventListener("keydown", e=>{ if(e.key==="Escape") $$(".lb").forEach(x=>x.remove()); });

/* vocabulary */
const VOCAB = [];
T.forEach(t => t.vocab.forEach(v => VOCAB.push({zh:v[0], py:v[1], tr:v[2], topic:t.id})));
P.forEach(p => VOCAB.push({zh:p.zh, py:p.py, tr:p.name, topic:"map"}));
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ü/g,"u").replace(/[\s'’-]/g,"").toLowerCase();
function vocabTable(words){
  return `<table class="vtable">${words.map(w=>`<tr><td class="vz">${w.zh}</td><td class="vp">${w.py}</td><td class="vt">${esc(w.tr)}</td>
  <td class="vs"><button class="say" data-say="${w.zh}" aria-label="${U.speak}">🔊</button><button class="star" data-star="${w.zh}" title="${U.markLearned}">☆</button></td></tr>`).join("")}</table>`;
}
function paintStars(root){ $$("[data-star]", root).forEach(s=>{ const on = stars.includes(s.dataset.star); s.classList.toggle("on", on); s.textContent = on ? "★" : "☆"; }); }
document.addEventListener("click", e=>{
  const s = e.target.closest("[data-star]"); if(!s) return;
  const z = s.dataset.star, i = stars.indexOf(z);
  if(i>=0) stars.splice(i,1); else stars.push(z);
  store.set("stars", stars); paintStars(document);
});
function flashcards(box, words){
  let i = 0, list = [...words];
  const draw = ()=>{
    const w = list[i];
    box.innerHTML = `<div class="flash"><div class="fc" id="fc"><div class="f"><b>${w.zh}</b><small class="muted">${U.flipHint}</small></div>
      <div class="b"><div class="p">${w.py}</div><div class="u">${esc(w.tr)}</div></div></div>
      <div class="fnav"><button class="btn sm" id="fp">←</button><span>${i+1} / ${list.length}</span><button class="btn sm" data-say="${w.zh}">🔊</button>
      <button class="btn sm" id="fs">🔀</button><button class="btn sm red" id="fn">→</button></div></div>`;
    $("#fc").onclick = ()=> $("#fc").classList.toggle("flip");
    $("#fp").onclick = ()=>{ i=(i-1+list.length)%list.length; draw(); };
    $("#fn").onclick = ()=>{ i=(i+1)%list.length; draw(); };
    $("#fs").onclick = ()=>{ list.sort(()=>Math.random()-.5); i=0; draw(); };
  };
  draw();
}

/* quiz */
function shuffle(a){ a=[...a]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function runQuiz(box, qs, key){
  qs = qs.map(q=>{ const o = shuffle(q.a.map((x,i)=>i)); return {...q, a:o.map(i=>q.a[i]), c:o.indexOf(q.c)}; });
  let n = 0, score = 0;
  const draw = ()=>{
    if(n>=qs.length){
      const pct = Math.round(score/qs.length*100);
      if(!best[key] || pct>best[key]){ best[key]=pct; store.set("best",best); }
      box.innerHTML = `<div class="quiz result"><div class="score">${score}/${qs.length}</div>
        <p>${pct===100?U.great:pct>=60?U.good:U.tryMore}</p><p class="muted">${tpl(U.best,{n:best[key]})}</p><button class="btn red" id="again">${U.retry}</button></div>`;
      $("#again", box).onclick = ()=> runQuiz(box, shuffle(qs), key);
      return;
    }
    const q = qs[n];
    box.innerHTML = `<div class="quiz"><div class="qn">${tpl(U.qOf,{n:n+1,m:qs.length})}</div>
      <div class="bar"><i style="width:${n/qs.length*100}%"></i></div><div class="qq">${fmt(q.q)}</div>
      <div class="opts">${q.a.map((a,i)=>`<button class="opt" data-i="${i}">${a.includes("{")?fmt(a):esc(a).replace(/([一-鿿，？]+)/g,'<span class="hz">$1</span>')}</button>`).join("")}</div><div id="ex"></div></div>`;
    $$(".opt", box).forEach(b=>b.onclick=()=>{
      const ok = +b.dataset.i===q.c; if(ok) score++;
      $$(".opt", box).forEach((x,j)=>{ x.disabled = true; if(j===q.c) x.classList.add("ok"); });
      if(!ok) b.classList.add("bad");
      $("#ex", box).innerHTML = `<div class="expl">${ok?U.correct:U.wrong} ${fmt(q.e||"")}</div>
        <div style="margin-top:12px;text-align:right"><button class="btn red sm" id="nx">${n+1<qs.length?U.next:U.result}</button></div>`;
      $("#nx", box).onclick = ()=>{ n++; draw(); };
    });
  };
  draw();
}
function provQuestions(){
  const withCap = P.filter(p=>p.cap), qs = [];
  shuffle(withCap).slice(0,4).forEach(p=>{
    const wrong = shuffle(withCap.filter(x=>x!==p)).slice(0,3).map(x=>`${x.cap[1]} ${x.cap[2]}`);
    qs.push({q:tpl(U.qCap,{name:p.name,zh:p.zh,py:p.py}), a:[`${p.cap[1]} ${p.cap[2]}`,...wrong], c:0, e:`{${p.cap[1]}|${p.cap[2]}|${p.cap[0]}}`});
  });
  shuffle(P).slice(0,3).forEach(p=>{
    const wrong = shuffle(P.filter(x=>x!==p)).slice(0,3).map(x=>`${x.abbr[0]} ${x.abbr[1]}`);
    qs.push({q:tpl(U.qAbbr,{name:p.name,zh:p.zh}), a:[`${p.abbr[0]} ${p.abbr[1]}`,...wrong], c:0, e:U.qAbbrE});
  });
  shuffle(P.filter(p=>p.type==="province")).slice(0,3).forEach(p=>{
    const wrong = shuffle(P.filter(x=>x!==p)).slice(0,3).map(x=>x.name);
    qs.push({q:tpl(U.qName,{zh:p.zh,py:p.py}), a:[p.name,...wrong], c:0, e:`${p.zh} ${p.py} — ${p.name}.`});
  });
  return shuffle(qs);
}

/* map helpers */
const MP = window.MAP_PATHS;
function popColor(v){
  const st=[[0,[246,226,196]],[10,[232,170,120]],[40,[205,95,70]],[80,[160,30,40]],[130,[95,15,25]]];
  for(let i=1;i<st.length;i++){ if(v<=st[i][0]){ const [a,ca]=st[i-1],[b,cb]=st[i], k=(v-a)/(b-a); return `rgb(${ca.map((c,j)=>Math.round(c+(cb[j]-c)*k)).join(",")})`; } }
  return "rgb(95,15,25)";
}
const typeColor = {province:"#2e6b5e",autonomous:"#c49a45",municipality:"#b8232f",sar:"#1f3a5f",taiwan:"#9b9184"};

/* widgets */
const W = U.w;
const WIDGETS = {
  tones(el){
    const tones=[["妈","mā","M4 8 H40"],["麻","má","M4 26 L40 6"],["马","mǎ","M4 12 L20 26 L40 8"],["骂","mà","M4 4 L40 26"],["吗","ma","M18 18 h6"]];
    const pict=[["人","rén"],["山","shān"],["水","shuǐ"],["木","mù"],["日","rì"],["月","yuè"],["口","kǒu"],["火","huǒ"],["马","mǎ"],["鱼","yú"]];
    el.innerHTML = `<div class="widget"><h3>${W.tonesH} <i style="font-weight:400;color:var(--gold)">shēngdiào</i></h3><div class="sub">${W.tonesSub}</div>
    <div class="tones">${tones.map((t,i)=>`<button class="tone" data-say="${t[0]}"><svg viewBox="0 0 44 30"><path d="${t[2]}" fill="none" stroke="#c49a45" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><b>${t[0]}</b><i>${t[1]}</i><small>${W.tones[i]}</small><small style="color:#fff">${W.tonesTr[i]}</small></button>`).join("")}</div>
    <div class="sub" style="margin:22px 0 10px">${W.pictH}</div>
    <div class="tones">${pict.map((c,i)=>`<button class="tone" data-say="${c[0]}"><b>${c[0]}</b><i>${c[1]}</i><small style="color:#fff">${W.pict[i]}</small></button>`).join("")}</div></div>`;
  },
  timeline(el, t){
    const tl = t.timeline;
    el.innerHTML = `<div class="widget"><h3>${W.tlH}</h3><div class="sub">${W.tlSub}</div>
    <div class="tl">${tl.map((d,i)=>`<div class="d" data-i="${i}"><b>${d[0]}</b><i>${d[1]}</i><small>${esc(d[2])}</small><small>${esc(d[3])}</small></div>`).join("")}</div><div class="tlinfo" id="tli"></div></div>`;
    const show = i=>{ const d = tl[i]; $$(".tl .d",el).forEach((x,j)=>x.classList.toggle("on",i===j));
      $("#tli",el).innerHTML = `<b style="font-family:var(--serif);font-size:18px">${esc(d[2])}</b> <span class="term" data-say="${d[0]}"><span class="t-hz">${d[0]}</span><span class="t-py">${d[1]}</span></span> · ${esc(d[3])}<br>${fmt(d[4])}`; };
    $$(".tl .d",el).forEach(x=>x.onclick=()=>show(+x.dataset.i)); show(9);
  },
  zodiac(el){
    const Z = window.ZODIAC, E = window.ELEMENTS;
    el.innerHTML = `<div class="widget"><h3>${W.zH}</h3><div class="sub">${W.zSub}</div>
    <div class="zform"><input id="zy" type="number" min="1900" max="2100" value="${new Date().getFullYear()-20}" aria-label="year"><button class="btn red" id="zgo">${W.zGo}</button></div>
    <div class="zres" id="zr"></div><div class="zwheel">${Z.map((z,i)=>`<div data-z="${i}"><span>${z[0]}</span>${z[1]} · ${esc(z[2])}</div>`).join("")}</div></div>`;
    const go = ()=>{
      const y = parseInt($("#zy",el).value,10); if(!(y>=1900 && y<=2100)) return;
      const zi = ((y-4)%12+12)%12, ei = Math.floor(((y%10)+10)%10/2), z = Z[zi], e = E[ei];
      $("#zr",el).innerHTML = `<div class="ani">${z[3]}</div><b>${z[0]}</b><div><div style="font-size:22px;font-family:var(--serif)">${esc(tpl(W.zYear,{y,a:z[4]}))}</div>
        <div>${W.zEl} <span class="term" data-say="${e[0]}"><span class="t-hz" style="color:#ffb3a8">${e[0]}</span><span class="t-py" style="color:#9fd3c3">${e[1]}</span></span> ${esc(e[2])}</div>
        <div style="margin-top:6px">${W.zSay} <span class="term" data-say="我属${z[0]}"><span class="t-hz" style="color:#ffb3a8">我属${z[0]}</span><span class="t-py" style="color:#9fd3c3">wǒ shǔ ${z[1]}</span></span></div></div>`;
      $$(".zwheel div",el).forEach(d=>d.classList.toggle("on", +d.dataset.z===zi));
    };
    $("#zgo",el).onclick = go; $("#zy",el).onkeydown = e=>{ if(e.key==="Enter") go(); };
    $$(".zwheel div",el).forEach(d=>d.onclick=()=>say(Z[+d.dataset.z][0])); go();
  },
  poem(el){
    const p = window.POEM;
    el.innerHTML = `<div class="widget"><h3>${p.title[0]} · ${p.title[1]} — “${esc(p.title[2])}”</h3>
    <div class="sub">${tpl(W.poemSub,{a:`${p.author[0]} ${p.author[1]}`,b:esc(p.author[2])})}</div>
    <div class="poem"><div class="ttlp">${p.title[0]}　${p.author[0]}</div>${p.lines.map(l=>`<div class="ln" data-say="${l[0]}">${l[0]}</div>`).join("")}</div>
    <div class="ptrans">${p.lines.map(l=>`<div><i>${l[1]}</i><span>${esc(l[2])}</span></div>`).join("")}</div>
    <div style="margin-top:12px;position:relative;z-index:1"><button class="btn sm red" data-say="${p.lines.map(l=>l[0]).join("，")}">${W.poemAll}</button>
    <span class="muted" style="font-size:12px;margin-left:8px">${W.poemNote}</span></div></div>`;
  },
  teas(el){
    const TE = window.TEAS;
    el.innerHTML = `<div class="widget"><h3>${W.teaH}</h3><div class="sub">${W.teaSub}</div><div class="grad"></div>
    <div class="teas">${TE.map((t,i)=>`<div class="tea" data-i="${i}" style="background:${t[4]}"><b>${t[0]}</b><small>${t[1]}<br>${esc(t[2])}</small></div>`).join("")}</div><div class="tlinfo" id="tei"></div></div>`;
    const show = i=>{ const t = TE[i]; $$(".tea",el).forEach((x,j)=>x.classList.toggle("on",i===j));
      $("#tei",el).innerHTML = `<span class="term" data-say="${t[0]}"><span class="t-hz">${t[0]}</span><span class="t-py">${t[1]}</span></span> — <b>${esc(t[2])}</b>. ${W.teaOx} ${esc(t[3])}. ${esc(t[5])}`; };
    $$(".tea",el).forEach(x=>x.onclick=()=>show(+x.dataset.i)); show(0);
  },
  cuisines(el){
    const C = window.CUISINES; if(!MP) return;
    el.innerHTML = `<div class="widget"><h3>${W.cuisH}</h3><div class="sub">${W.cuisSub}</div>
    <div class="cuis"><svg viewBox="0 0 ${MP.w} ${MP.h}">${Object.entries(MP.p).map(([id,p])=>`<path d="${p.d}" data-id="${id}" class="${C.some(c=>c[3]===id)?"hl":""}"/>`).join("")}</svg>
    <div><div class="clist">${C.map((c,i)=>`<button data-i="${i}"><b>${c[0]}</b>${esc(c[2])}</button>`).join("")}</div><div class="tlinfo" id="cui"></div></div></div></div>`;
    const show = i=>{ const c = C[i]; $$(".clist button",el).forEach((x,j)=>x.classList.toggle("on",i===j));
      $$(".cuis path",el).forEach(p=>p.classList.toggle("on",p.dataset.id===c[3]));
      $("#cui",el).innerHTML = `<span class="term" data-say="${c[0]}"><span class="t-hz">${c[0]}</span><span class="t-py">${c[1]}</span></span> — ${esc(c[2])} ${W.cuisOf} (<a href="${provUrl(c[3])}">${esc(byId[c[3]].name)}</a>). ${esc(c[4])}`; };
    $$(".clist button",el).forEach(x=>x.onclick=()=>show(+x.dataset.i));
    $$(".cuis path.hl",el).forEach(p=>p.onclick=()=>show(C.findIndex(c=>c[3]===p.dataset.id)));
    show(1);
  }
};

/* ---------- pages ---------- */
function markSeen(){ $$(".tcard[data-topic]").forEach(a=>a.classList.toggle("seen", visited.includes(a.dataset.topic))); }

const pages = {
  home(){
    markSeen();
    const d = new Date(), w = VOCAB[(d.getFullYear()*372 + d.getMonth()*31 + d.getDate()) % VOCAB.length];
    $(".wodhz").textContent = w.zh; $(".wodpy").textContent = w.py; $(".wodtr").textContent = w.tr; $(".wodbtn").dataset.say = w.zh;
    const prog = Math.round(visited.filter(v=>T.some(t=>t.id===v)).length / T.length * 100);
    $("#wod .bar i").style.width = prog+"%"; $("#wod .pct").textContent = prog+"%";
  },
  topics(){ markSeen(); },
  topic(){
    const id = B.dataset.id, t = T.find(x=>x.id===id); if(!t) return;
    if(!visited.includes(id)){ visited.push(id); store.set("visited", visited); }
    const words = t.vocab.map(v=>({zh:v[0],py:v[1],tr:v[2]})), vbox = $("#vocab");
    paintStars(vbox);
    $$("[data-vm]").forEach(b=>b.onclick=()=>{ $$("[data-vm]").forEach(x=>x.classList.toggle("on",x===b));
      if(b.dataset.vm==="list"){ vbox.innerHTML = vocabTable(words); paintStars(vbox); } else flashcards(vbox, words); });
    $("#sayall").onclick = ()=> say(words.map(w=>w.zh).join("，"));
    runQuiz($("#quiz"), t.quiz, "t_"+id);
    if(t.widget && WIDGETS[t.widget]) WIDGETS[t.widget]($("#widget"), t);
  },
  map(){
    const svg = $("#msvg"), tip = $("#tip"); let mode = "region", game = null;
    const fill = p => mode==="region" ? RG[p.region].color : mode==="pop" ? popColor(p.pop) : mode==="type" ? typeColor[p.type] : "#cbbfa8";
    const els = $$("path, circle", svg);
    function setMode(m){
      mode = m; $$("[data-m]").forEach(b=>b.classList.toggle("on", b.dataset.m===m));
      els.forEach(e=>e.style.fill = fill(byId[e.dataset.id]));
      $("#mbox").classList.toggle("quizmode", m==="game");
      const leg = $("#leg");
      if(m==="region") leg.innerHTML = Object.values(RG).map(r=>`<span><i style="background:${r.color}"></i>${esc(r.name)} <span class="hz">${r.zh}</span></span>`).join("");
      else if(m==="pop") leg.innerHTML = [3,10,25,50,80,126].map(v=>`<span><i style="background:${popColor(v)}"></i>${v} ${U.mln}</span>`).join("")+`<span class="muted">${U.popLegend}</span>`;
      else if(m==="type") leg.innerHTML = Object.entries(TY).map(([k,t])=>`<span><i style="background:${typeColor[k]}"></i>${esc(t.name)} <span class="hz">${t.zh}</span></span>`).join("");
      else leg.innerHTML = "";
      if(m==="game") startGame(); else $("#mq").innerHTML = "";
    }
    function select(id){
      els.forEach(e=>e.classList.toggle("sel", e.dataset.id===id));
      const p = byId[id], t = TY[p.type], r = RG[p.region];
      const area = p.area>=1 ? `${Math.round(p.area).toLocaleString(U.locale)} ${U.thKm}` : `${Math.round(p.area*1000)} ${U.km}`;
      $("#pinfo").innerHTML = `<div class="pinfo fade" style="--c:${r.color}">
        <div class="ph" data-wiki="${p.wiki}"><div class="nm"><b>${p.zh}</b><span>${p.py}</span></div></div>
        <div class="bd"><h3>${esc(p.name)} <button class="say" data-say="${p.zh}" style="vertical-align:middle">🔊</button></h3>
        <span class="badge">${esc(t.name)} · ${t.zh} ${t.py}</span><span class="badge" style="background:${r.color};color:#fff">${esc(r.name)} · ${r.zh}</span>
        ${p.status?`<div class="note">${fmt(p.status)}</div>`:""}
        <dl class="kv">${p.cap?`<dt>${U.capital}</dt><dd>${fmt(`{${p.cap[1]}|${p.cap[2]}|${p.cap[0]}}`)}</dd>`:""}
          <dt>${U.population}</dt><dd>≈ ${p.pop.toLocaleString(U.locale,{maximumFractionDigits:2})} ${U.mln} <span class="muted">(${esc(p.popNote||U.census)})</span></dd>
          <dt>${U.area}</dt><dd>≈ ${area}</dd></dl>
        <h5>${U.see}</h5><ul>${p.sights.map(s=>`<li>${fmt(s)}</li>`).join("")}</ul>
        <a class="btn red more" href="${provUrl(id)}">${U.more}</a></div></div>`;
      loadPhotos($("#pinfo"));
      if(innerWidth<960) $("#pinfo").scrollIntoView({behavior:"smooth",block:"start"});
    }
    function startGame(){
      game = {ids: shuffle(P.filter(p=>p.type!=="sar").map(p=>p.id)).slice(0,10), n:0, score:0, tries:0};
      els.forEach(e=>e.style.fill = "#cbbfa8"); nextGame();
    }
    function nextGame(){
      const box = $("#mq");
      if(game.n>=game.ids.length){ box.innerHTML = `<div class="mquiz"><b>${U.gameResult} ${game.score} / ${game.ids.length} 🎉</b><button class="btn sm red" id="gre">${U.again}</button></div>`; $("#gre").onclick = startGame; return; }
      const p = byId[game.ids[game.n]]; game.tries = 0;
      box.innerHTML = `<div class="mquiz"><div>${U.gameFind} <span class="hz">${p.zh}</span> <i>${p.py}</i> — ${esc(p.name)}</div><span>${game.n+1}/${game.ids.length} · ✓ ${game.score}</span></div>`;
    }
    function gameClick(p, el){
      if(game.n>=game.ids.length) return;
      const target = game.ids[game.n];
      if(p.id===target){ if(game.tries===0) game.score++; el.style.fill = game.tries===0 ? "#2e6b5e" : "#c49a45"; say(p.zh); game.n++; setTimeout(nextGame, 500); }
      else { game.tries++; toast(tpl(U.gameWrong,{name:p.name,zh:p.zh,py:p.py})); if(game.tries>=2) $(`#msvg path[data-id="${target}"]`).style.fill = "#b8232f"; }
    }
    els.forEach(el=>{
      const p = byId[el.dataset.id];
      el.addEventListener("mousemove", e=>{ if(mode==="game") return; tip.innerHTML = `<span class="hz">${p.zh}</span> ${p.py} · ${esc(p.name)}`; tip.style.opacity = 1; tip.style.left = (e.clientX+14)+"px"; tip.style.top = (e.clientY+14)+"px"; });
      el.addEventListener("mouseleave", ()=> tip.style.opacity = 0);
      el.addEventListener("click", ()=>{ tip.style.opacity = 0; mode==="game" ? gameClick(p, el) : select(p.id); });
    });
    $$("[data-m]").forEach(b=>b.onclick=()=>setMode(b.dataset.m));
    setMode("region");
    const pre = new URLSearchParams(location.search).get("p"); if(pre && byId[pre]) select(pre);
  },
  province(){
    const box = $("#minimap"), id = B.dataset.id; if(!box || !MP) return;
    box.innerHTML = `<svg viewBox="0 0 ${MP.w} ${MP.h}" role="img" aria-label="${esc(byId[id].name)}">${P.map(p=>MP.p[p.id]?`<a href="${provUrl(p.id)}"><path d="${MP.p[p.id].d}" class="${p.id===id?"sel":""}"><title>${esc(p.name)} ${p.zh}</title></path></a>`:"").join("")}${["810000","820000"].map(i=>`<a href="${provUrl(i)}"><circle cx="${MP.p[i].cx+(i==="810000"?8:-8)}" cy="${MP.p[i].cy+6}" r="7" class="${i===id?"sel":""}"><title>${esc(byId[i].name)}</title></circle></a>`).join("")}</svg>`;
  },
  dict(){
    let mode = "list";
    const draw = ()=>{
      const raw = $("#q").value.trim(), q = norm(raw), tf = $("#tf").value, seen = new Set();
      const list = VOCAB.filter(w=>{
        if(tf==="star" ? !stars.includes(w.zh) : (tf && w.topic!==tf)) return false;
        if(q && !(w.zh.includes(raw) || norm(w.py).includes(q) || norm(w.tr).includes(q))) return false;
        if(seen.has(w.zh)) return false; seen.add(w.zh); return true;
      });
      $("#cnt").textContent = tpl(U.found,{n:list.length});
      if(!list.length){ $("#dl").innerHTML = `<div class="empty"><span class="hz">无</span>${U.nothing}</div>`; return; }
      if(mode==="list"){ $("#dl").innerHTML = vocabTable(list); paintStars($("#dl")); } else flashcards($("#dl"), list);
    };
    $("#q").oninput = draw; $("#tf").onchange = draw;
    $$("[data-dm]").forEach(b=>b.onclick=()=>{ mode = b.dataset.dm; $$("[data-dm]").forEach(x=>x.classList.toggle("on",x===b)); draw(); });
    paintStars($("#dl"));
  },
  quiz(){
    const w = new URLSearchParams(location.search).get("t") || "mix";
    $$("[data-q]").forEach(a=>{ a.classList.toggle("on", a.dataset.q===w); if(best["t_"+a.dataset.q]!=null) a.textContent += ` · ${best["t_"+a.dataset.q]}%`; });
    let qs;
    if(w==="mix") qs = shuffle(T.flatMap(t=>t.quiz)).slice(0,12);
    else if(w==="prov") qs = provQuestions();
    else { const t = T.find(x=>x.id===w); qs = t ? t.quiz : shuffle(T.flatMap(t=>t.quiz)).slice(0,12); }
    runQuiz($("#qbox"), qs, "t_"+w);
  }
};

if(pages[PAGE]) pages[PAGE]();
loadPhotos(document);
})();
