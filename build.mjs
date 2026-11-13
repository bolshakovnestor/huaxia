// Static site generator for 华夏 · Huaxia.  Usage: node build.mjs
// Generates /uk/… and /en/… pages, sitemap.xml, robots.txt into the repo root.
import fs from "fs";
import path from "path";
import vm from "vm";
import { UI, SLUGS } from "./src/ui.mjs";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const SITE = "https://bolshakovnestor.github.io/huaxia/";
const LANGS = ["uk", "en"];
const VER = Date.now().toString(36);

function loadData(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "src/data", file), "utf8"), ctx);
  return ctx.window;
}
const DATA = { uk: loadData("uk.js"), en: loadData("en.js") };
const WIKI = loadData("images.js").WIKI;
const GALLERY = loadData("images.js").GALLERY;
const GAL_EN = { "长城":"Great Wall of China" };
const MAP = loadData("../assets/map-paths.js").MAP_PATHS;

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const TERM = /\{([^|{}]+)\|([^|{}]+)\|([^{}]+)\}/g;
const fmt = s => esc(s).replace(TERM, (m, hz, py, tr) =>
  `<span class="term" tabindex="0" data-say="${hz}"><span class="t-hz">${hz}</span><span class="t-py">${py}</span> <span class="t-tr">(${tr})</span></span>`);
const plain = s => String(s).replace(TERM, (m, hz, py, tr) => `${hz} ${py} (${tr})`);
const plainHz = s => String(s).replace(TERM, (m, hz) => hz);
const tpl = (s, o) => s.replace(/\{(\w+)\}/g, (m, k) => (o[k] ?? m));
const num = (n, L, d = 2) => n.toLocaleString(UI[L].locale, { maximumFractionDigits: d });

const out = [];          // [{lang, rel}] for sitemap
function write(rel, html) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
}

/* ---------- layout ---------- */
function layout({ L, rel, page, title, desc, body, extraScripts = "", attrs = "" }) {
  const u = UI[L], other = L === "uk" ? "en" : "uk";
  const depth = rel.split("/").length - 1;           // "uk/topics/x/index.html" -> 3
  const R = "../".repeat(depth);
  const pathNoIdx = rel.replace(/index\.html$/, "");
  const altRel = pathNoIdx.replace(/^(uk|en)\//, other + "/");
  out.push({ L, url: pathNoIdx });
  const nav = [["home", ""], ["topics", "topics/"], ["map", "map/"], ["dict", "dictionary/"], ["quiz", "quiz/"]];
  return `<!DOCTYPE html>
<html lang="${L}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${pathNoIdx}">
<link rel="alternate" hreflang="${L}" href="${SITE}${pathNoIdx}">
<link rel="alternate" hreflang="${other}" href="${SITE}${altRel}">
<link rel="alternate" hreflang="x-default" href="${SITE}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(u.site)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${pathNoIdx}">
<meta property="og:locale" content="${u.ogLocale}">
<link rel="icon" href="${R}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Ma+Shan+Zheng&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${R}assets/style.css?v=${VER}">
</head>
<body data-page="${page}" data-lang="${L}" data-root="${R}" ${attrs}>
<header class="top">
  <div class="wrap">
    <a class="logo" href="${R}${L}/"><span class="seal">华</span><span><b>${u.brand}</b><small>${u.brandSub}</small></span></a>
    <nav class="main" id="nav">
      ${nav.map(([k, p], i) => `<a href="${R}${L}/${p}" class="${k === page || (page === "topic" && k === "topics") || (page === "province" && k === "map") ? "on" : ""}"><span class="hz">${"家文图词考"[i]}</span>${u.nav[k]}</a>`).join("\n      ")}
    </nav>
    <a class="lang" href="${R}${altRel}" hreflang="${other}" lang="${other}" title="${UI[other].langName}">${UI[other].short}</a>
  </div>
</header>
<main id="app">
${body}
</main>
<div class="tip" id="tip"></div>
<footer>
  <div class="wrap">
    <div class="foot">
      <div><b>${esc(u.site)}</b><br>${esc(u.footerA)}</div>
      <div>${esc(u.footerB)}<br><a href="${R}${altRel}" hreflang="${other}">${u.otherLang}</a></div>
    </div>
  </div>
</footer>
<script src="${R}assets/data-${L}.js?v=${VER}"></script>
${extraScripts.replaceAll("{R}", R).replaceAll("{V}", VER)}
<script src="${R}assets/app.js?v=${VER}"></script>
</body>
</html>`;
}

/* ---------- shared fragments ---------- */
function tcard(t, R, L, u) {
  return `<a class="tcard" href="${R}${L}/topics/${t.id}/" data-topic="${t.id}" style="--c:${t.color}">
    <span class="big">${t.icon}</span><div class="ic">${t.icon}</div>
    <h3>${esc(t.name)}</h3><div class="zh">${t.zh} · <i>${t.py}</i></div>
    <p>${esc(plainHz(t.lead)).slice(0, 110)}…</p><span class="done">${u.seen}</span></a>`;
}
function vocabTable(words, u) {
  return `<table class="vtable">${words.map(w => `<tr><td class="vz">${w[0]}</td><td class="vp">${w[1]}</td><td class="vt">${esc(w[2])}</td>
  <td class="vs"><button class="say" data-say="${w[0]}" aria-label="${u.speak}">🔊</button><button class="star" data-star="${w[0]}" title="${u.markLearned}">☆</button></td></tr>`).join("")}</table>`;
}
function tile(term) {
  const m = /\{([^|{}]+)\|([^|{}]+)\|([^{}]+)\}/.exec(term);
  if (!m) return `<p>${fmt(term)}</p>`;
  const hz = m[1], en = WIKI[hz] || "";
  return `<figure class="tile"><div class="im" ${en ? `data-wiki="${esc(en)}"` : ""} data-zh="${hz}" data-cap="${esc(m[3])}"><span class="ph-hz">${hz}</span></div>
    <figcaption>${fmt(term)}</figcaption></figure>`;
}
function mapSvg(D, { id = "msvg", sel = null, links = false, R = "", L = "" } = {}) {
  const paths = D.PROVINCES.map(p => {
    const m = MAP.p[p.id]; if (!m) return "";
    const pathEl = `<path d="${m.d}" data-id="${p.id}" class="${p.type === "taiwan" ? "tw" : ""}${p.id === sel ? " sel" : ""}"><title>${esc(p.name)} ${p.zh}</title></path>`;
    return links ? `<a href="${R}${L}/provinces/${SLUGS[p.id]}/">${pathEl}</a>` : pathEl;
  }).join("");
  const dots = ["810000", "820000"].map(i => {
    const c = `<circle cx="${MAP.p[i].cx + (i === "810000" ? 8 : -8)}" cy="${MAP.p[i].cy + 6}" r="7" data-id="${i}" class="${i === sel ? "sel" : ""}"><title>${esc(D.PROVINCES.find(p => p.id === i).name)}</title></circle>`;
    return links ? `<a href="${R}${L}/provinces/${SLUGS[i]}/">${c}</a>` : c;
  }).join("");
  const labels = sel ? "" : D.PROVINCES.map(p => {
    const m = MAP.p[p.id]; if (!m || ["110000", "120000", "310000", "810000", "820000"].includes(p.id)) return "";
    return `<text x="${m.cx}" y="${m.cy}" text-anchor="middle" dominant-baseline="middle">${p.zh}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${MAP.w} ${MAP.h}" id="${id}" role="img" aria-label="Map">${paths}${dots}${labels}</svg>`;
}
const MOUNTAINS = `<svg class="mount" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6d6a66"/><stop offset="1" stop-color="#d8cdb8"/></linearGradient><linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b3835"/><stop offset="1" stop-color="#8a8278"/></linearGradient><linearGradient id="m3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1a19"/><stop offset="1" stop-color="#4b4540"/></linearGradient></defs><path fill="url(#m1)" opacity=".45" d="M0 170 L90 120 L160 150 L250 70 L330 130 L420 90 L520 150 L600 60 L700 140 L790 100 L880 150 L980 50 L1080 130 L1170 95 L1260 140 L1350 80 L1440 120 V260 H0Z"/><path fill="url(#m2)" opacity=".6" d="M0 200 L120 150 L210 190 L330 120 L440 185 L560 140 L650 195 L770 130 L900 200 L1010 150 L1120 195 L1240 140 L1360 190 L1440 160 V260 H0Z"/><path fill="url(#m3)" d="M0 235 C120 205 200 245 330 215 S560 240 690 220 S940 250 1070 222 S1300 245 1440 225 V260 H0Z"/><g fill="none" stroke="#b8232f" stroke-width="1.6" opacity=".55"><path d="M1060 70 q14 -10 28 0 q14 10 28 0"/><path d="M1100 92 q12 -8 24 0 q12 8 24 0"/></g></svg>`;

/* ---------- pages ---------- */
function home(L) {
  const D = DATA[L], u = UI[L], rel = `${L}/index.html`, R = "../";
  const vocabN = D.TOPICS.reduce((a, t) => a + t.vocab.length, 0) + D.PROVINCES.length;
  const body = `<section class="hero"><div class="sun"></div>${MOUNTAINS}
  <div class="wrap">
    <div>
      <h1>中华<span>文化</span></h1>
      <div class="py">${esc(u.heroPy)}</div>
      <h2>${esc(u.heroH2)}</h2>
      <p>${esc(u.heroP)}</p>
      <div class="btns"><a class="btn red" href="${R}${L}/topics/">${esc(u.start)}</a><a class="btn" href="${R}${L}/map/">${esc(u.mapBtn)}</a><a class="btn" href="${R}${L}/quiz/">${esc(u.quizBtn)}</a></div>
    </div>
    <div class="stamp" id="wod">
      <div class="muted wodl">${u.wod}</div>
      <div class="wodrow"><div class="wodhz"></div><div><div class="wodpy"></div><div class="wodtr"></div></div></div>
      <button class="btn sm wodbtn">${u.listen}</button>
      <div class="prog">${u.progress} <div class="bar"><i></i></div> <span class="pct">0%</span></div>
    </div>
  </div></section>
  <div class="wrap">
    <div class="stats">
      <div class="stat"><b>${D.TOPICS.length}</b><span>${u.stats[0]}</span></div>
      <div class="stat"><b>${D.PROVINCES.length}</b><span>${u.stats[1]}</span></div>
      <div class="stat"><b>${vocabN}</b><span>${u.stats[2]}</span></div>
      <div class="stat"><b>${D.TOPICS.reduce((a, t) => a + t.quiz.length, 0)}</b><span>${u.stats[3]}</span></div>
    </div>
    <section class="blk"><div class="ttl"><h2>${u.topicsH}</h2><span class="hz">主题</span><span class="py">zhǔtí</span></div>
      <div class="grid">${D.TOPICS.map(t => tcard(t, R, L, u)).join("")}</div></section>
    <section class="blk" style="padding-top:0"><div class="ttl"><h2>${u.landmarksH}</h2><span class="hz">名胜古迹</span><span class="py">míngshèng gǔjì</span></div>
      <div class="gal">${GALLERY.map(g => {
        const t = D.PROVINCES.find(p => p.id === g[3]);
        const sight = t.sights.find(s => s.startsWith("{" + g[0] + "|"));
        const label = sight ? sight.match(/\{[^|]+\|[^|]+\|([^}]+)\}/)[1] : (L === "uk" ? g[2] : GAL_EN[g[0]] || g[2]);
        return `<a href="${R}${L}/provinces/${SLUGS[g[3]]}/" class="gi"><div class="im" data-wiki="${esc(WIKI[g[0]] || "")}" data-zh="${g[0]}" data-cap="${esc(label)}"><span class="ph-hz">${g[0]}</span></div>
        <div class="gc"><b class="hz">${g[0]}</b> <i>${g[1]}</i><br>${esc(label)}<br><small class="muted">${esc(t.name)}</small></div></a>`; }).join("")}</div></section>
    <section class="blk" style="padding-top:0"><div class="widget tipw">
      <div><h3>${esc(u.tipH)}</h3><div class="sub" style="margin:0">${tpl(esc(u.tipP), { a: fmt(L === "uk" ? "{你好|nǐ hǎo|привіт}" : "{你好|nǐ hǎo|hello}"), b: fmt(L === "uk" ? "{谢谢|xièxie|дякую}" : "{谢谢|xièxie|thank you}") })}</div></div>
      <a class="btn red" href="${R}${L}/dictionary/">${esc(u.dictBtn)}</a></div></section>
  </div>`;
  write(rel, layout({ L, rel, page: "home", title: `${u.site} — ${u.homeTitle}`, desc: u.homeDesc, body }));
}

function topicsList(L) {
  const D = DATA[L], u = UI[L], rel = `${L}/topics/index.html`, R = "../../";
  const body = `<div class="wrap"><section class="blk">
    <div class="ttl"><h1>${u.allTopics}</h1><span class="hz">主题</span><span class="py">zhǔtí</span></div>
    <p class="muted" style="margin-top:-10px">${esc(u.order)}</p>
    <div class="grid">${D.TOPICS.map(t => tcard(t, R, L, u)).join("")}</div></section></div>`;
  write(rel, layout({ L, rel, page: "topics", title: `${u.allTopics} — ${u.site}`, desc: u.allTopicsDesc, body }));
}

function topicPage(L, i) {
  const D = DATA[L], u = UI[L], t = D.TOPICS[i], rel = `${L}/topics/${t.id}/index.html`, R = "../../../";
  const prev = D.TOPICS[(i - 1 + D.TOPICS.length) % D.TOPICS.length], next = D.TOPICS[(i + 1) % D.TOPICS.length];
  const card = c => { const m = /\{([^|{}]+)\|/.exec(c.t); const k = m && WIKI[m[1]] ? m[1] : null;
    return `<div class="card${k ? " has-img" : ""}">${k ? `<div class="cimg im" data-wiki="${esc(WIKI[k])}" data-cap="${esc(c.h)}"></div>` : ""}<h3>${esc(c.h)}</h3><p>${fmt(c.t)}</p></div>`; };
  const timeline = t.timeline ? `<noscript><ol>${t.timeline.map(d => `<li>${d[0]} ${d[1]} — ${esc(d[2])}, ${esc(d[3])}</li>`).join("")}</ol></noscript>` : "";
  const body = `<div class="tbanner" style="--c:${t.color}"><div class="ph" data-wiki="${t.wiki}"></div>
    <div class="wrap"><div class="crumbs"><a href="${R}${L}/topics/">${u.back}</a></div>
      <div class="bigzh">${t.zh}</div><div class="pys">${t.py}</div><h1>${esc(t.name)}</h1></div>
    <div class="credit"></div></div>
  <div class="wrap" style="--c:${t.color}">
    <p class="lead">${fmt(t.lead)}</p>
    ${t.sections.map(s => `<section class="sec"><h2>${esc(s.title)}</h2><div class="cards">${s.cards.map(card).join("")}</div></section>`).join("")}
    <div id="widget"></div>${timeline}
    <section class="sec"><h2>${u.vocabH} · 词汇 <span class="muted" style="font:italic 15px var(--serif)">cíhuì</span></h2>
      <div class="vtools"><button class="chip on" data-vm="list">${u.list}</button><button class="chip" data-vm="cards">${u.cards}</button>
      <button class="chip" id="sayall">${u.sayAll}</button></div>
      <div id="vocab">${vocabTable(t.vocab, u)}</div></section>
    <section class="sec"><h2>${u.quizH} · 测验 <span class="muted" style="font:italic 15px var(--serif)">cèyàn</span></h2><div id="quiz"></div></section>
    <div class="sources"><h2>${u.sourcesH}</h2><ol>${t.sources.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a></li>`).join("")}</ol></div>
    <div class="pn"><a class="btn" href="${R}${L}/topics/${prev.id}/">← ${esc(prev.name)}</a><a class="btn red" href="${R}${L}/topics/${next.id}/">${esc(next.name)} →</a></div>
  </div>`;
  const extra = t.widget === "cuisines" ? `<script src="{R}assets/map-paths.js?v={V}"></script>` : "";
  write(rel, layout({ L, rel, page: "topic", title: `${t.name} (${t.zh}) — ${u.site}`, desc: plain(t.lead).slice(0, 300), body, extraScripts: extra, attrs: `data-id="${t.id}"` }));
}

function mapPage(L) {
  const D = DATA[L], u = UI[L], rel = `${L}/map/index.html`, R = "../../";
  const list = Object.entries(D.REGIONS).map(([k, r]) => `<h3 class="rgh"><i style="background:${r.color}"></i>${esc(r.name)} · <span class="hz">${r.zh}</span> <i class="muted rpy">${r.py}</i></h3>
    <div class="plist">${D.PROVINCES.filter(p => p.region === k).map(p => `<a href="${R}${L}/provinces/${SLUGS[p.id]}/" data-p="${p.id}"><span>${esc(p.name)} <span class="hz">${p.zh}</span></span><span class="muted" style="font-size:12px">${p.py}</span></a>`).join("")}</div>`).join("");
  const body = `<div class="wrap"><section class="blk">
    <div class="ttl"><h1>${u.mapH}</h1><span class="hz">中国地图</span><span class="py">Zhōngguó dìtú</span></div>
    <p class="muted" style="margin-top:-12px">${esc(u.mapDesc)}</p>
    <div class="maplay"><div>
      <div class="mtools">${Object.entries(u.modes).map(([k, v]) => `<button class="chip" data-m="${k}">${v}</button>`).join("")}</div>
      <div id="mq"></div>
      <div class="mapbox" id="mbox">${mapSvg(D)}<div class="legend" id="leg"></div></div>
    </div><div id="pinfo"><div class="pinfo"><div class="empty"><span class="hz">省</span><b>${u.pickH}</b><br><span class="muted">${tpl(esc(u.pickP), { t: fmt(L === "uk" ? "{省|shěng|провінція}" : "{省|shěng|province}") })}</span></div></div></div></div>
    <section class="sec"><h2>${u.listAll}</h2>${list}</section>
    <div class="sources"><h2>${u.dataSources}</h2><ol>
      <li><a href="https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817188.html" target="_blank" rel="noopener">NBS China — Seventh National Population Census 2020</a></li>
      <li><a href="https://www.census2021.gov.hk/en/index.html" target="_blank" rel="noopener">Hong Kong 2021 Population Census</a>; <a href="https://www.dsec.gov.mo/en-US/" target="_blank" rel="noopener">Macao DSEC</a></li>
      <li><a href="https://whc.unesco.org/en/statesparties/cn" target="_blank" rel="noopener">UNESCO World Heritage — China</a></li>
      <li><a href="https://en.wikipedia.org/wiki/Provinces_of_China" target="_blank" rel="noopener">Wikipedia — Provinces of China</a></li>
      <li>Apache ECharts 4 (china.json), Apache-2.0.</li></ol></div>
  </section></div>`;
  write(rel, layout({ L, rel, page: "map", title: `${u.mapTitle} — ${u.site}`, desc: u.mapDesc, body, extraScripts: `<script src="{R}assets/map-paths.js?v={V}"></script>` }));
}

function provincePage(L, p, idx) {
  const D = DATA[L], u = UI[L], slug = SLUGS[p.id], rel = `${L}/provinces/${slug}/index.html`, R = "../../../";
  const t = D.TYPES[p.type], r = D.REGIONS[p.region];
  const all = D.PROVINCES, prev = all[(idx - 1 + all.length) % all.length], next = all[(idx + 1) % all.length];
  const sib = all.filter(x => x.region === p.region && x.id !== p.id);
  const area = p.area >= 1 ? `${num(Math.round(p.area), L)} ${u.thKm}` : `${Math.round(p.area * 1000)} ${u.km}`;
  const body = `<div class="tbanner pban" style="--c:${r.color}"><div class="ph" data-wiki="${p.wiki}"></div>
    <div class="wrap"><div class="crumbs"><a href="${R}${L}/map/">${u.allProvinces}</a></div>
      <div class="bigzh">${p.zh}</div><div class="pys">${p.py}</div><h1>${esc(p.name)} <button class="say light" data-say="${p.zh}" aria-label="${u.speak}">🔊</button></h1></div>
    <div class="credit"></div></div>
  <div class="wrap"><div class="provlay">
    <div>
      <div class="badges"><span class="badge">${esc(t.name)} · ${t.zh} ${t.py}</span><span class="badge" style="background:${r.color};color:#fff">${esc(r.name)} · ${r.zh}</span></div>
      ${p.status ? `<div class="note">${fmt(p.status)}</div>` : ""}
      <dl class="kv">
        ${p.meaning ? `<dt>${u.meaning}</dt><dd>${esc(p.meaning)}</dd>` : ""}
        <dt>${u.abbr}</dt><dd>${fmt(`{${p.abbr[0]}|${p.abbr[1]}|${u.abbrT}}`)}</dd>
        ${p.cap ? `<dt>${u.capital}</dt><dd>${fmt(`{${p.cap[1]}|${p.cap[2]}|${p.cap[0]}}`)}</dd>` : ""}
        <dt>${u.population}</dt><dd>≈ ${num(p.pop, L)} ${u.mln} <span class="muted">(${esc(p.popNote || u.census)})</span></dd>
        <dt>${u.area}</dt><dd>≈ ${area}</dd>
      </dl>
      <h2 class="h5">${u.see}</h2><div class="tiles">${p.sights.map(tile).join("")}</div>
      <h2 class="h5">${u.taste}</h2><div class="tiles">${p.food.map(tile).join("")}</div>
      <h2 class="h5">${u.know}</h2><ul class="facts">${p.facts.map(s => `<li>${fmt(s)}</li>`).join("")}</ul>
    </div>
    <aside>
      <div class="mapbox mini"><h2 class="h5">${u.onMap}</h2><div id="minimap"></div></div>
      ${sib.length ? `<div class="sibs"><h2 class="h5">${u.sameRegion}</h2><div class="plist one">${sib.map(x => `<a href="${R}${L}/provinces/${SLUGS[x.id]}/"><span>${esc(x.name)} <span class="hz">${x.zh}</span></span><span class="muted" style="font-size:12px">${x.py}</span></a>`).join("")}</div></div>` : ""}
    </aside>
  </div>
  <div class="pn"><a class="btn" href="${R}${L}/provinces/${SLUGS[prev.id]}/">← ${esc(prev.name)}</a><a class="btn red" href="${R}${L}/provinces/${SLUGS[next.id]}/">${esc(next.name)} →</a></div>
  </div>`;
  write(rel, layout({ L, rel, page: "province", title: tpl(u.provTitle, { name: p.name, zh: p.zh, py: p.py }),
    desc: tpl(u.provDesc, { name: p.name, zh: p.zh, py: p.py, type: t.name, region: r.name }), body, extraScripts: `<script src="{R}assets/map-paths.js?v={V}"></script>`, attrs: `data-id="${p.id}" data-region="${p.region}"` }));
}

function dictPage(L) {
  const D = DATA[L], u = UI[L], rel = `${L}/dictionary/index.html`, R = "../../";
  const seen = new Set(), words = [];
  D.TOPICS.forEach(t => t.vocab.forEach(v => { if (!seen.has(v[0])) { seen.add(v[0]); words.push(v); } }));
  D.PROVINCES.forEach(p => { if (!seen.has(p.zh)) { seen.add(p.zh); words.push([p.zh, p.py, p.name]); } });
  const body = `<div class="wrap"><section class="blk">
    <div class="ttl"><h1>${u.dictH}</h1><span class="hz">词典</span><span class="py">cídiǎn</span></div>
    <div class="dtools"><input class="search" id="q" placeholder="${esc(u.search)}" autocomplete="off" aria-label="${esc(u.search)}">
      <select id="tf" aria-label="${u.allTopics}"><option value="">${u.allTopics}</option>${D.TOPICS.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join("")}<option value="map">${u.provincesOpt}</option><option value="star">${u.starred}</option></select>
      <button class="chip on" data-dm="list">${u.list}</button><button class="chip" data-dm="cards">${u.cards}</button></div>
    <p class="muted" id="cnt">${tpl(u.found, { n: words.length })}</p><div id="dl">${vocabTable(words, u)}</div></section></div>`;
  write(rel, layout({ L, rel, page: "dict", title: `${u.dictTitle} — ${u.site}`, desc: u.dictDesc, body }));
}

function quizPage(L) {
  const D = DATA[L], u = UI[L], rel = `${L}/quiz/index.html`, R = "../../";
  const opts = [["mix", u.mix], ["prov", u.provQuiz], ...D.TOPICS.map(t => [t.id, t.name])];
  const body = `<div class="wrap"><section class="blk">
    <div class="ttl"><h1>${u.quizH}</h1><span class="hz">考试</span><span class="py">kǎoshì</span></div>
    <div class="mtools" id="qchips">${opts.map(o => `<a class="chip" href="?t=${o[0]}" data-q="${o[0]}">${esc(o[1])}</a>`).join("")}</div>
    <div id="qbox" style="margin-top:14px"></div></section></div>`;
  write(rel, layout({ L, rel, page: "quiz", title: `${u.quizTitle} — ${u.site}`, desc: u.quizDesc, body }));
}

function rootPage() {
  const html = `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light">
<title>华夏 · Довідник китайської культури · Chinese Culture Guide</title>
<meta name="description" content="Інтерактивний довідник китайської культури українською та англійською. An interactive Chinese culture guide in Ukrainian and English.">
<link rel="canonical" href="${SITE}">
<link rel="alternate" hreflang="uk" href="${SITE}uk/"><link rel="alternate" hreflang="en" href="${SITE}en/"><link rel="alternate" hreflang="x-default" href="${SITE}">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Ma+Shan+Zheng&family=Noto+Serif:wght@600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/style.css?v=${VER}">
<script>
(function(){try{var q=new URLSearchParams(location.search);if(q.has("stay"))return;var s=localStorage.getItem("hx_lang");
var l=s||((navigator.languages||[navigator.language||""]).some(function(x){return /^(uk|ru)/i.test(x)})?"uk":"en");location.replace(l+"/");}catch(e){}})();
</script>
</head>
<body class="rootp">
<main class="choose">
  <div class="seal big">华</div>
  <h1>华夏 · Huáxià</h1>
  <p>Довідник китайської культури · Chinese Culture Guide</p>
  <div class="btns"><a class="btn red" href="uk/" hreflang="uk" lang="uk">Українська</a><a class="btn" href="en/" hreflang="en" lang="en">English</a></div>
</main>
</body></html>`;
  write("index.html", html);
  const nf = html.replace(/<script>[\s\S]*?<\/script>/, "").replace(/href="(uk\/|en\/|assets\/)/g, 'href="/huaxia/$1')
    .replace("<title>", "<title>404 · ").replace('<div class="seal big">华</div>', '<div class="seal big">无</div>').replace("<h1>华夏 · Huáxià</h1>", "<h1>404</h1>")
    .replace('<link rel="canonical" href="' + SITE + '">', '<meta name="robots" content="noindex">');
  write("404.html", nf);
}

function bundles() {
  const asset = f => path.join(ROOT, "assets", f);
  fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });
  for (const L of LANGS) {
    const src = fs.readFileSync(path.join(ROOT, "src/data", L + ".js"), "utf8") + "\n" + fs.readFileSync(path.join(ROOT, "src/data/images.js"), "utf8");
    const slugs = `\nwindow.SLUGS=${JSON.stringify(SLUGS)};\nwindow.UI=${JSON.stringify(UI[L])};\n`;
    fs.writeFileSync(asset(`data-${L}.js`), src + slugs);
  }
  for (const f of ["app.js", "style.css", "map-paths.js", "favicon.svg"]) fs.copyFileSync(path.join(ROOT, "src/assets", f), asset(f));
}

function sitemap() {
  const byUrl = {};
  out.forEach(o => { const key = o.url.replace(/^(uk|en)\//, ""); (byUrl[key] ||= {})[o.L] = o.url; });
  const urls = Object.values(byUrl).flatMap(v => LANGS.filter(l => v[l]).map(l => `  <url><loc>${SITE}${v[l]}</loc>
${LANGS.filter(x => v[x]).map(x => `    <xhtml:link rel="alternate" hreflang="${x}" href="${SITE}${v[x]}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}"/>
  </url>`));
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${SITE}</loc></url>
${urls.join("\n")}
</urlset>
`);
  write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
}

/* ---------- run ---------- */
for (const d of ["uk", "en"]) fs.rmSync(path.join(ROOT, d), { recursive: true, force: true });
bundles();
for (const L of LANGS) {
  home(L); topicsList(L); mapPage(L); dictPage(L); quizPage(L);
  DATA[L].TOPICS.forEach((t, i) => topicPage(L, i));
  DATA[L].PROVINCES.forEach((p, i) => provincePage(L, p, i));
}
rootPage(); sitemap();
fs.writeFileSync(path.join(ROOT, ".nojekyll"), "");
console.log(`Built ${out.length} pages (${LANGS.join(", ")}), version ${VER}`);
