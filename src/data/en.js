// Provincial-level divisions of China (English).
// Population: 7th National Population Census of the PRC, 2020 (NBS Communiqué No.3, 11 May 2021);
// Hong Kong and Macau — 2021 censuses; Taiwan — 2024 estimate. Area — approximate, thousand km².
window.REGIONS = {
  huabei:  { name: "North China", zh: "华北", py: "Huáběi", color: "#c9a45c" },
  dongbei: { name: "Northeast", zh: "东北", py: "Dōngběi", color: "#5b7fa6" },
  huadong: { name: "East China", zh: "华东", py: "Huádōng", color: "#2f7a68" },
  huazhong:{ name: "Central China", zh: "华中", py: "Huázhōng", color: "#d0794a" },
  huanan:  { name: "South China", zh: "华南", py: "Huánán", color: "#b8232f" },
  xinan:   { name: "Southwest", zh: "西南", py: "Xīnán", color: "#7b5ea7" },
  xibei:   { name: "Northwest", zh: "西北", py: "Xīběi", color: "#8c8577" }
};

window.TYPES = {
  province:     { name: "Province", zh: "省", py: "shěng" },
  autonomous:   { name: "Autonomous region", zh: "自治区", py: "zìzhìqū" },
  municipality: { name: "Municipality", zh: "直辖市", py: "zhíxiáshì" },
  sar:          { name: "Special administrative region", zh: "特别行政区", py: "tèbié xíngzhèngqū" },
  taiwan:       { name: "Taiwan (disputed status)", zh: "台湾", py: "Táiwān" }
};

window.PROVINCES = [
  { id:"110000", name:"Beijing", zh:"北京", py:"Běijīng", type:"municipality", region:"huabei",
    abbr:["京","Jīng"], cap:null, pop:21.89, area:16.4, wiki:"Beijing",
    meaning:"“Northern capital”",
    sights:["{故宫|Gùgōng|the Forbidden City (Imperial Palace)}","{天坛|Tiāntán|Temple of Heaven}","{颐和园|Yíhéyuán|Summer Palace}","{八达岭长城|Bādálǐng Chángchéng|Great Wall at Badaling}"],
    food:["{北京烤鸭|Běijīng kǎoyā|Peking duck}","{炸酱面|zhájiàngmiàn|noodles with fried bean sauce}"],
    facts:["Capital of China since the Ming dynasty (from 1421), with interruptions; capital of the PRC since 1949.","The first city ever to host both the Summer (2008) and Winter (2022) Olympic Games."] },
  { id:"120000", name:"Tianjin", zh:"天津", py:"Tiānjīn", type:"municipality", region:"huabei",
    abbr:["津","Jīn"], cap:null, pop:13.87, area:11.9, wiki:"Tianjin",
    meaning:"“Ford of the Son of Heaven”",
    sights:["{五大道|Wǔdàdào|“Five Great Avenues” — a quarter of old European villas}","{天津之眼|Tiānjīn zhī Yǎn|the Tianjin Eye Ferris wheel}"],
    food:["{狗不理包子|Gǒubùlǐ bāozi|Goubuli steamed buns}","{煎饼果子|jiānbing guǒzi|Chinese street-breakfast crêpe}"],
    facts:["A major seaport about 120 km from Beijing.","Known for its tradition of {相声|xiàngsheng|crosstalk, a comic dialogue}."] },
  { id:"310000", name:"Shanghai", zh:"上海", py:"Shànghǎi", type:"municipality", region:"huadong",
    abbr:["沪","Hù"], cap:null, pop:24.87, area:6.3, wiki:"Shanghai",
    meaning:"“On the sea”",
    sights:["{外滩|Wàitān|the Bund waterfront}","{东方明珠|Dōngfāng Míngzhū|Oriental Pearl TV Tower}","{豫园|Yùyuán|Yu Garden}"],
    food:["{小笼包|xiǎolóngbāo|soup dumplings}","{生煎包|shēngjiānbāo|pan-fried buns}"],
    facts:["China's largest city by urban population.","The Port of Shanghai is the world's busiest container port."] },
  { id:"500000", name:"Chongqing", zh:"重庆", py:"Chóngqìng", type:"municipality", region:"xinan",
    abbr:["渝","Yú"], cap:null, pop:32.05, area:82.4, wiki:"Chongqing",
    meaning:"“Double celebration”",
    sights:["{洪崖洞|Hóngyádòng|the multi-level Hongyadong quarter}","{大足石刻|Dàzú Shíkè|Dazu Rock Carvings (UNESCO)}","{长江三峡|Cháng Jiāng Sānxiá|Three Gorges of the Yangtze}"],
    food:["{重庆火锅|Chóngqìng huǒguō|spicy Chongqing hot pot}","{小面|xiǎomiàn|spicy “small noodles”}"],
    facts:["A municipality directly under the central government since 1997.","Nicknamed {山城|shānchéng|the “mountain city”} because of its terrain."] },
  { id:"130000", name:"Hebei", zh:"河北", py:"Héběi", type:"province", region:"huabei",
    abbr:["冀","Jì"], cap:["Shijiazhuang","石家庄","Shíjiāzhuāng"], pop:74.61, area:188.8, wiki:"Hebei",
    meaning:"“North of the (Yellow) River”",
    sights:["{山海关|Shānhǎiguān|Shanhai Pass — “the First Pass Under Heaven”}","{承德避暑山庄|Chéngdé Bìshǔ Shānzhuāng|Chengde Mountain Resort}","{赵州桥|Zhàozhōu Qiáo|Zhaozhou (Anji) Bridge, Sui dynasty}"],
    food:["{驴肉火烧|lǘròu huǒshao|donkey-meat burger}"],
    facts:["The province surrounds Beijing and Tianjin.","The Zhaozhou Bridge (early 7th c.) is the oldest surviving open-spandrel stone arch bridge."] },
  { id:"140000", name:"Shanxi", zh:"山西", py:"Shānxī", type:"province", region:"huabei",
    abbr:["晋","Jìn"], cap:["Taiyuan","太原","Tàiyuán"], pop:34.92, area:156.7, wiki:"Shanxi",
    meaning:"“West of the (Taihang) Mountains”",
    sights:["{平遥古城|Píngyáo Gǔchéng|Ancient City of Pingyao (UNESCO)}","{云冈石窟|Yúngāng Shíkū|Yungang Grottoes}","{五台山|Wǔtái Shān|Mount Wutai, a Buddhist sacred mountain}"],
    food:["{刀削面|dāoxiāomiàn|knife-shaved noodles}","{老陈醋|lǎo chéncù|Shanxi aged vinegar}"],
    facts:["Do not confuse with Shǎnxī 陕西: the names differ only in the tone of the first syllable!","One of China's main coal-producing regions."] },
  { id:"150000", name:"Inner Mongolia", zh:"内蒙古", py:"Nèi Měnggǔ", type:"autonomous", region:"huabei",
    abbr:["蒙","Měng"], cap:["Hohhot","呼和浩特","Hūhéhàotè"], pop:24.05, area:1183, wiki:"Inner_Mongolia",
    meaning:"“Inner Mongolia”",
    sights:["{呼伦贝尔草原|Hūlúnbèi'ěr Cǎoyuán|Hulunbuir grasslands}","{成吉思汗陵|Chéngjísīhán Líng|Mausoleum of Genghis Khan (Ordos)}"],
    food:["{手把肉|shǒubǎròu|mutton eaten by hand}","{奶茶|nǎichá|salty milk tea}"],
    facts:["China's first autonomous region (1947).","The {那达慕|Nàdámù|Naadam} festival features wrestling, horse racing and archery; the {马头琴|mǎtóuqín|morin khuur, horse-head fiddle} is its signature instrument."] },
  { id:"210000", name:"Liaoning", zh:"辽宁", py:"Liáoníng", type:"province", region:"dongbei",
    abbr:["辽","Liáo"], cap:["Shenyang","沈阳","Shěnyáng"], pop:42.59, area:148, wiki:"Liaoning",
    meaning:"“Peace on the Liao River”",
    sights:["{沈阳故宫|Shěnyáng Gùgōng|Mukden Palace in Shenyang (UNESCO)}","{大连|Dàlián|the seaside city of Dalian}"],
    food:["{老边饺子|Lǎobiān jiǎozi|Laobian dumplings (Shenyang)}","{海鲜|hǎixiān|Dalian seafood}"],
    facts:["Shenyang (Mukden) was the first capital of the Manchu Qing dynasty before it moved to Beijing (1644).","An important industrial region of the Northeast."] },
  { id:"220000", name:"Jilin", zh:"吉林", py:"Jílín", type:"province", region:"dongbei",
    abbr:["吉","Jí"], cap:["Changchun","长春","Chángchūn"], pop:24.07, area:187.4, wiki:"Jilin",
    meaning:"from Manchu “along the river”",
    sights:["{长白山天池|Chángbái Shān Tiānchí|Heaven Lake crater on Changbai Mountain}","{雾凇|wùsōng|rime-covered trees in Jilin City}"],
    food:["{冷面|lěngmiàn|cold noodles (Korean cuisine)}"],
    facts:["Home of the {延边朝鲜族自治州|Yánbiān Cháoxiǎnzú Zìzhìzhōu|Yanbian Korean Autonomous Prefecture}.","Changchun is a centre of China's car industry (FAW)."] },
  { id:"230000", name:"Heilongjiang", zh:"黑龙江", py:"Hēilóngjiāng", type:"province", region:"dongbei",
    abbr:["黑","Hēi"], cap:["Harbin","哈尔滨","Hā'ěrbīn"], pop:31.85, area:473, wiki:"Heilongjiang",
    meaning:"“Black Dragon River” (Chinese name of the Amur)",
    sights:["{哈尔滨冰雪大世界|Hā'ěrbīn Bīngxuě Dàshìjiè|Harbin Ice and Snow World}","{圣索菲亚教堂|Shèng Suǒfēiyà Jiàotáng|St. Sophia Cathedral, Harbin}"],
    food:["{红肠|hóngcháng|Harbin red sausage}","{锅包肉|guōbāoròu|pork in sweet-and-sour batter}"],
    facts:["China's northernmost province: aurora can be seen in {漠河|Mòhé|Mohe}.","Harbin has a distinctive early-20th-century Russian architectural legacy."] },
  { id:"320000", name:"Jiangsu", zh:"江苏", py:"Jiāngsū", type:"province", region:"huadong",
    abbr:["苏","Sū"], cap:["Nanjing","南京","Nánjīng"], pop:84.75, area:107.2, wiki:"Jiangsu",
    meaning:"from the cities of Jiangning (Nanjing) and Suzhou",
    sights:["{苏州园林|Sūzhōu yuánlín|Classical Gardens of Suzhou (UNESCO)}","{拙政园|Zhuōzhèng Yuán|Humble Administrator's Garden}","{中山陵|Zhōngshān Líng|Sun Yat-sen Mausoleum}"],
    food:["{松鼠鳜鱼|sōngshǔ guìyú|“squirrel” mandarin fish}","{盐水鸭|yánshuǐ yā|Nanjing salted duck}"],
    facts:["{南京|Nánjīng|“Southern capital”} was the capital of the early Ming and of the Republic of China.","Birthplace of {昆曲|kūnqǔ|Kunqu opera}, on UNESCO's first list of masterpieces (2001)."] },
  { id:"330000", name:"Zhejiang", zh:"浙江", py:"Zhèjiāng", type:"province", region:"huadong",
    abbr:["浙","Zhè"], cap:["Hangzhou","杭州","Hángzhōu"], pop:64.57, area:105.5, wiki:"Zhejiang",
    meaning:"after the old name of the Qiantang River",
    sights:["{西湖|Xī Hú|West Lake (UNESCO)}","{乌镇|Wūzhèn|Wuzhen water town}","{良渚古城|Liángzhǔ Gǔchéng|Liangzhu ruins (~5,300 years old)}"],
    food:["{龙井虾仁|lóngjǐng xiārén|shrimp with Longjing tea}","{东坡肉|Dōngpō ròu|Dongpo pork}"],
    facts:["A saying: {上有天堂，下有苏杭|shàng yǒu tiāntáng, xià yǒu Sū Háng|“Above is paradise, below are Suzhou and Hangzhou”}.","Home of {西湖龙井|Xīhú Lóngjǐng|West Lake “Dragon Well” tea}."] },
  { id:"340000", name:"Anhui", zh:"安徽", py:"Ānhuī", type:"province", region:"huadong",
    abbr:["皖","Wǎn"], cap:["Hefei","合肥","Héféi"], pop:61.03, area:140.1, wiki:"Anhui",
    meaning:"from the cities of Anqing and Huizhou",
    sights:["{黄山|Huáng Shān|the Yellow Mountains (UNESCO)}","{宏村|Hóngcūn|Hongcun ancient village}","{西递|Xīdì|Xidi village}"],
    food:["{臭鳜鱼|chòu guìyú|“stinky” fermented mandarin fish}","{毛豆腐|máo dòufu|“hairy” tofu}"],
    facts:["Produces {宣纸|xuānzhǐ|Xuan paper} — the classic paper for calligraphy.","Peking opera emerged after Anhui troupes came to Beijing in 1790 ({徽班进京|Huībān jìn Jīng|“the Anhui troupes enter the capital”})."] },
  { id:"350000", name:"Fujian", zh:"福建", py:"Fújiàn", type:"province", region:"huadong",
    abbr:["闽","Mǐn"], cap:["Fuzhou","福州","Fúzhōu"], pop:41.54, area:124, wiki:"Fujian",
    meaning:"from the cities of Fuzhou and Jianzhou",
    sights:["{福建土楼|Fújiàn tǔlóu|Fujian earthen “fortress” houses (UNESCO)}","{武夷山|Wǔyí Shān|Wuyi Mountains}","{鼓浪屿|Gǔlàngyǔ|Gulangyu Island (Xiamen)}"],
    food:["{佛跳墙|fótiàoqiáng|“Buddha Jumps Over the Wall” soup}","{沙茶面|shāchámiàn|noodles in shacha sauce}"],
    facts:["Home of the teas {铁观音|Tiěguānyīn|“Iron Goddess of Mercy”} and {大红袍|Dàhóngpáo|“Big Red Robe”}.","The port of {泉州|Quánzhōu|Quanzhou} is on the UNESCO list as the “Emporium of the World” of Song–Yuan China (2021)."] },
  { id:"360000", name:"Jiangxi", zh:"江西", py:"Jiāngxī", type:"province", region:"huadong",
    abbr:["赣","Gàn"], cap:["Nanchang","南昌","Nánchāng"], pop:45.19, area:166.9, wiki:"Jiangxi",
    meaning:"“West of the River”",
    sights:["{景德镇|Jǐngdézhèn|Jingdezhen — the “porcelain capital”}","{庐山|Lú Shān|Mount Lu (UNESCO)}","{滕王阁|Téngwáng Gé|Pavilion of Prince Teng}"],
    food:["{瓦罐汤|wǎguàn tāng|soup slow-cooked in clay jars}"],
    facts:["{鄱阳湖|Póyáng Hú|Poyang Lake} is China's largest freshwater lake.","Jingdezhen porcelain supplied the imperial court for centuries."] },
  { id:"370000", name:"Shandong", zh:"山东", py:"Shāndōng", type:"province", region:"huadong",
    abbr:["鲁","Lǔ"], cap:["Jinan","济南","Jǐnán"], pop:101.53, area:158, wiki:"Shandong",
    meaning:"“East of the (Taihang) Mountains”",
    sights:["{泰山|Tài Shān|Mount Tai (UNESCO)}","{曲阜三孔|Qūfù Sān Kǒng|Temple, Mansion and Cemetery of Confucius in Qufu}","{青岛|Qīngdǎo|the city of Qingdao}"],
    food:["{鲁菜|Lǔcài|Shandong cuisine}","{煎饼|jiānbing|thin crêpe}"],
    facts:["Birthplace of {孔子|Kǒngzǐ|Confucius} and {孟子|Mèngzǐ|Mencius}.","China's second most populous province (over 100 million)."] },
  { id:"410000", name:"Henan", zh:"河南", py:"Hénán", type:"province", region:"huazhong",
    abbr:["豫","Yù"], cap:["Zhengzhou","郑州","Zhèngzhōu"], pop:99.37, area:167, wiki:"Henan",
    meaning:"“South of the (Yellow) River”",
    sights:["{少林寺|Shàolín Sì|Shaolin Monastery on Mount Song}","{龙门石窟|Lóngmén Shíkū|Longmen Grottoes (UNESCO)}","{殷墟|Yīnxū|Ruins of Yin, the Shang capital (Anyang)}"],
    food:["{烩面|huìmiàn|braised wide noodles}","{胡辣汤|húlàtāng|peppery soup}"],
    facts:["Heart of the {中原|Zhōngyuán|Central Plain} — the cradle of Chinese civilisation.","{甲骨文|jiǎgǔwén|oracle-bone script}, the earliest large body of Chinese writing, was found at Anyang."] },
  { id:"420000", name:"Hubei", zh:"湖北", py:"Húběi", type:"province", region:"huazhong",
    abbr:["鄂","È"], cap:["Wuhan","武汉","Wǔhàn"], pop:57.75, area:185.9, wiki:"Hubei",
    meaning:"“North of the (Dongting) Lake”",
    sights:["{三峡大坝|Sānxiá Dàbà|Three Gorges Dam}","{黄鹤楼|Huánghè Lóu|Yellow Crane Tower}","{武当山|Wǔdāng Shān|Wudang Mountains (UNESCO)}"],
    food:["{热干面|règānmiàn|“hot dry” noodles with sesame paste}"],
    facts:["The Three Gorges Dam is the world's largest power station by installed capacity.","Wudang is an important centre of Taoism and martial arts."] },
  { id:"430000", name:"Hunan", zh:"湖南", py:"Húnán", type:"province", region:"huazhong",
    abbr:["湘","Xiāng"], cap:["Changsha","长沙","Chángshā"], pop:66.44, area:211.8, wiki:"Hunan",
    meaning:"“South of the (Dongting) Lake”",
    sights:["{张家界|Zhāngjiājiè|Zhangjiajie — the stone pillars of Wulingyuan (UNESCO)}","{凤凰古城|Fènghuáng Gǔchéng|Fenghuang ancient town}","{岳麓书院|Yuèlù Shūyuàn|Yuelu Academy (976 AD)}"],
    food:["{湘菜|Xiāngcài|Hunan cuisine — very spicy}","{剁椒鱼头|duòjiāo yútóu|fish head with chopped chillies}"],
    facts:["One of the “Eight Great Cuisines” of China.","Silk texts and garments of the Han era were found in the {马王堆|Mǎwángduī|Mawangdui} tombs."] },
  { id:"440000", name:"Guangdong", zh:"广东", py:"Guǎngdōng", type:"province", region:"huanan",
    abbr:["粤","Yuè"], cap:["Guangzhou","广州","Guǎngzhōu"], pop:126.01, area:179.7, wiki:"Guangdong",
    meaning:"“Broad east”",
    sights:["{开平碉楼|Kāipíng Diāolóu|Kaiping Diaolou tower-houses (UNESCO)}","{深圳|Shēnzhèn|Shenzhen}","{广州塔|Guǎngzhōu Tǎ|Canton Tower}"],
    food:["{早茶|zǎochá|morning tea with dim sum}","{虾饺|xiājiǎo|shrimp dumplings}","{叉烧|chāshāo|char siu barbecued pork}"],
    facts:["China's most populous province (≈126 million, 2020).","People speak {粤语|Yuèyǔ|Cantonese}; {深圳|Shēnzhèn|Shenzhen} became the first Special Economic Zone (1980)."] },
  { id:"450000", name:"Guangxi", zh:"广西", py:"Guǎngxī", type:"autonomous", region:"huanan",
    abbr:["桂","Guì"], cap:["Nanning","南宁","Nánníng"], pop:50.13, area:237.6, wiki:"Guangxi",
    meaning:"“Broad west”",
    sights:["{漓江|Lí Jiāng|Li River}","{阳朔|Yángshuò|Yangshuo}","{龙脊梯田|Lóngjǐ Tītián|“Dragon's Backbone” rice terraces}"],
    food:["{螺蛳粉|luósīfěn|river-snail rice noodles (Liuzhou)}","{桂林米粉|Guìlín mǐfěn|Guilin rice noodles}"],
    facts:["A saying: {桂林山水甲天下|Guìlín shānshuǐ jiǎ tiānxià|“Guilin's mountains and waters are the finest under heaven”}.","Homeland of the {壮族|Zhuàngzú|Zhuang}, China's largest ethnic minority (≈19.6 million)."] },
  { id:"460000", name:"Hainan", zh:"海南", py:"Hǎinán", type:"province", region:"huanan",
    abbr:["琼","Qióng"], cap:["Haikou","海口","Hǎikǒu"], pop:10.08, area:35.4, wiki:"Hainan",
    meaning:"“South of the sea”",
    sights:["{三亚|Sānyà|Sanya resort}","{天涯海角|Tiānyá Hǎijiǎo|“Edge of the sky, corner of the sea”}"],
    food:["{文昌鸡|Wénchāng jī|Wenchang chicken}","{椰子|yēzi|coconut}"],
    facts:["A separate province since 1988; a tropical island.","The Hainan Free Trade Port is under development."] },
  { id:"510000", name:"Sichuan", zh:"四川", py:"Sìchuān", type:"province", region:"xinan",
    abbr:["川","Chuān"], cap:["Chengdu","成都","Chéngdū"], pop:83.67, area:486, wiki:"Sichuan",
    meaning:"“Four rivers” (or “four circuits”)",
    sights:["{九寨沟|Jiǔzhàigōu|Jiuzhaigou Valley}","{乐山大佛|Lèshān Dàfó|Leshan Giant Buddha (71 m)}","{都江堰|Dūjiāngyàn|Dujiangyan irrigation system (256 BC)}","{三星堆|Sānxīngduī|Sanxingdui culture}"],
    food:["{麻婆豆腐|mápó dòufu|mapo tofu}","{宫保鸡丁|gōngbǎo jīdīng|Kung Pao chicken}","{火锅|huǒguō|hot pot}"],
    facts:["Home of the {大熊猫|dàxióngmāo|giant panda}: the panda sanctuaries are a UNESCO site.","Chengdu is a UNESCO City of Gastronomy (2010); the {麻辣|málà|numbing-spicy} flavour comes from {花椒|huājiāo|Sichuan pepper}."] },
  { id:"520000", name:"Guizhou", zh:"贵州", py:"Guìzhōu", type:"province", region:"xinan",
    abbr:["黔","Qián"], cap:["Guiyang","贵阳","Guìyáng"], pop:38.56, area:176.2, wiki:"Guizhou",
    meaning:"after Mount Gui",
    sights:["{黄果树瀑布|Huángguǒshù Pùbù|Huangguoshu Waterfall}","{西江千户苗寨|Xījiāng Qiānhù Miáozhài|Xijiang Miao village}","{梵净山|Fànjìng Shān|Mount Fanjing (UNESCO)}"],
    food:["{酸汤鱼|suāntāng yú|fish in sour soup}","{茅台|Máotái|Moutai liquor (baijiu)}"],
    facts:["Home of {中国天眼|Zhōngguó Tiānyǎn|the “Sky Eye” — the 500-metre FAST radio telescope}.","The polyphonic {侗族大歌|Dòngzú dàgē|Grand Song of the Dong} is on the UNESCO list (2009)."] },
  { id:"530000", name:"Yunnan", zh:"云南", py:"Yúnnán", type:"province", region:"xinan",
    abbr:["滇","Diān"], cap:["Kunming","昆明","Kūnmíng"], pop:47.21, area:394, wiki:"Yunnan",
    meaning:"“South of the clouds”",
    sights:["{丽江古城|Lìjiāng Gǔchéng|Old Town of Lijiang (UNESCO)}","{大理|Dàlǐ|Dali}","{石林|Shílín|the Stone Forest}","{红河哈尼梯田|Hónghé Hāní Tītián|Hani rice terraces (UNESCO)}"],
    food:["{过桥米线|guòqiáo mǐxiàn|“crossing-the-bridge” noodles}","{普洱茶|Pǔ'ěr chá|Pu'er tea}"],
    facts:["The greatest ethnic diversity: 25 minorities, including the {纳西族|Nàxīzú|Naxi}, {白族|Báizú|Bai} and {傣族|Dǎizú|Dai}.","Kunming is called the {春城|Chūnchéng|“City of Eternal Spring”}."] },
  { id:"540000", name:"Tibet", zh:"西藏", py:"Xīzàng", type:"autonomous", region:"xinan",
    abbr:["藏","Zàng"], cap:["Lhasa","拉萨","Lāsà"], pop:3.65, area:1228, wiki:"Tibet_Autonomous_Region",
    meaning:"“Western Tsang”",
    sights:["{布达拉宫|Bùdálā Gōng|Potala Palace (UNESCO)}","{大昭寺|Dàzhāo Sì|Jokhang Temple}","{珠穆朗玛峰|Zhūmùlǎngmǎ Fēng|Mount Everest (Qomolangma)}"],
    food:["{酥油茶|sūyóuchá|yak-butter tea}","{糌粑|zānba|tsampa — roasted barley flour}"],
    facts:["Average elevation over 4,000 m — “the roof of the world”.","The least populous provincial-level region of the PRC (≈3.65 million); the main people are the {藏族|Zàngzú|Tibetans}."] },
  { id:"610000", name:"Shaanxi", zh:"陕西", py:"Shǎnxī", type:"province", region:"xibei",
    abbr:["陕","Shǎn"], cap:["Xi'an","西安","Xī'ān"], pop:39.53, area:205.6, wiki:"Shaanxi",
    meaning:"“West of the Shan Pass”",
    sights:["{兵马俑|Bīngmǎyǒng|Terracotta Army}","{大雁塔|Dàyàn Tǎ|Giant Wild Goose Pagoda}","{西安城墙|Xī'ān Chéngqiáng|Xi'an city wall}","{华山|Huà Shān|Mount Hua}"],
    food:["{肉夹馍|ròujiāmó|the “Chinese burger”}","{羊肉泡馍|yángròu pàomó|mutton soup with bread}"],
    facts:["{西安|Xī'ān|Xi'an}, ancient {长安|Cháng'ān|Chang'an}, was the capital of the Han and Tang and the starting point of the Silk Road.","In English it is spelled Shaanxi (double a) to distinguish it from Shanxi."] },
  { id:"620000", name:"Gansu", zh:"甘肃", py:"Gānsù", type:"province", region:"xibei",
    abbr:["甘","Gān"], cap:["Lanzhou","兰州","Lánzhōu"], pop:25.02, area:425.8, wiki:"Gansu",
    meaning:"from the cities of Ganzhou and Suzhou",
    sights:["{莫高窟|Mògāo Kū|Mogao Caves (Dunhuang)}","{嘉峪关|Jiāyùguān|Jiayu Pass}","{张掖丹霞|Zhāngyè Dānxiá|Zhangye “rainbow mountains”}","{月牙泉|Yuèyá Quán|Crescent Lake}"],
    food:["{兰州牛肉面|Lánzhōu niúròu miàn|Lanzhou beef noodles}"],
    facts:["The {河西走廊|Héxī Zǒuláng|Hexi Corridor} was a key section of the Silk Road.","Jiayu Pass marks the western end of the Ming Great Wall."] },
  { id:"630000", name:"Qinghai", zh:"青海", py:"Qīnghǎi", type:"province", region:"xibei",
    abbr:["青","Qīng"], cap:["Xining","西宁","Xīníng"], pop:5.92, area:722, wiki:"Qinghai",
    meaning:"“Blue sea” (after the lake)",
    sights:["{青海湖|Qīnghǎi Hú|Qinghai Lake}","{塔尔寺|Tǎ'ěr Sì|Kumbum Monastery}","{可可西里|Kěkěxīlǐ|Hoh Xil (UNESCO)}"],
    food:["{牦牛酸奶|máoniú suānnǎi|yak-milk yoghurt}"],
    facts:["Qinghai Lake is China's largest lake (saltwater).","{三江源|Sānjiāngyuán|“Source of Three Rivers”}: the Yangtze, Yellow River and Mekong all begin here."] },
  { id:"640000", name:"Ningxia", zh:"宁夏", py:"Níngxià", type:"autonomous", region:"xibei",
    abbr:["宁","Níng"], cap:["Yinchuan","银川","Yínchuān"], pop:7.20, area:66.4, wiki:"Ningxia",
    meaning:"“Pacified Xia”",
    sights:["{西夏陵|Xīxià Líng|Western Xia Imperial Tombs (UNESCO 2025)}","{沙坡头|Shāpōtóu|Shapotou desert}","{贺兰山岩画|Hèlán Shān yánhuà|Helan Mountains petroglyphs}"],
    food:["{枸杞|gǒuqǐ|goji berries}","{手抓羊肉|shǒuzhuā yángròu|hand-held mutton}"],
    facts:["Homeland of the {回族|Huízú|Hui}, Chinese-speaking Muslims.","The Western Xia tombs became China's 60th UNESCO World Heritage Site (July 2025)."] },
  { id:"650000", name:"Xinjiang", zh:"新疆", py:"Xīnjiāng", type:"autonomous", region:"xibei",
    abbr:["新","Xīn"], cap:["Ürümqi","乌鲁木齐","Wūlǔmùqí"], pop:25.85, area:1660, wiki:"Xinjiang",
    meaning:"“New frontier”",
    sights:["{天山|Tiān Shān|Tian Shan mountains (UNESCO)}","{喀什|Kāshí|Kashgar}","{吐鲁番|Tǔlǔfān|Turpan}","{塔克拉玛干沙漠|Tǎkèlāmǎgān Shāmò|Taklamakan Desert}"],
    food:["{大盘鸡|dàpánjī|“big plate chicken”}","{烤羊肉串|kǎo yángròu chuàn|lamb skewers}","{馕|náng|naan flatbread}"],
    facts:["The largest provincial-level region — about one sixth of China's territory.","The Turpan Depression holds China's lowest point, Ayding Lake (≈−154 m); it is known for {坎儿井|kǎn'erjǐng|karez underground channels}."] },
  { id:"810000", name:"Hong Kong", zh:"香港", py:"Xiānggǎng", type:"sar", region:"huanan",
    abbr:["港","Gǎng"], cap:null, pop:7.41, popNote:"2021 census", area:1.1, wiki:"Hong_Kong",
    meaning:"“Fragrant harbour”",
    sights:["{维多利亚港|Wéiduōlìyà Gǎng|Victoria Harbour}","{太平山|Tàipíng Shān|Victoria Peak}","{天坛大佛|Tiāntán Dàfó|the Big Buddha on Lantau}"],
    food:["{菠萝包|bōluóbāo|“pineapple” bun}","{港式奶茶|Gǎngshì nǎichá|Hong Kong–style milk tea}"],
    facts:["A British colony from 1842; returned to China on 1 July 1997 under the principle of {一国两制|yī guó liǎng zhì|“one country, two systems”}.","Official languages are Chinese (Cantonese) and English; {繁体字|fántǐzì|traditional characters} are used."] },
  { id:"820000", name:"Macau", zh:"澳门", py:"Àomén", type:"sar", region:"huanan",
    abbr:["澳","Ào"], cap:null, pop:0.68, popNote:"2021 census", area:0.033, wiki:"Macau",
    meaning:"“Bay gate”",
    sights:["{大三巴牌坊|Dàsānbā Páifāng|Ruins of St. Paul's}","{澳门历史城区|Àomén Lìshǐ Chéngqū|Historic Centre of Macau (UNESCO)}"],
    food:["{葡式蛋挞|Púshì dàntà|Portuguese egg tart}"],
    facts:["Under Portuguese administration from the 16th century until 20 December 1999.","Official languages are Chinese and Portuguese; one of the most densely populated places on Earth."] },
  { id:"710000", name:"Taiwan", zh:"台湾", py:"Táiwān", type:"taiwan", region:"huadong",
    abbr:["台","Tái"], cap:["Taipei","台北","Táiběi"], pop:23.4, popNote:"2024 estimate", area:36.2, wiki:"Taiwan",
    meaning:"",
    status:"Since 1949 the island has been governed by the Republic of China ({中华民国|Zhōnghuá Mínguó|Republic of China}). The PRC regards Taiwan as its province; its international status remains disputed.",
    sights:["{台北故宫博物院|Táiběi Gùgōng Bówùyuàn|National Palace Museum, Taipei}","{日月潭|Rìyuè Tán|Sun Moon Lake}","{阿里山|Ālǐ Shān|Alishan mountains}"],
    food:["{珍珠奶茶|zhēnzhū nǎichá|bubble (“pearl”) tea}","{夜市|yèshì|night market}"],
    facts:["Bubble tea was invented in Taiwan in the 1980s.","Traditional characters and the phonetic alphabet {注音|zhùyīn|Zhuyin (Bopomofo)} are used here."] }
];
window.TOPICS = window.TOPICS || [];
window.TOPICS.push(
{
  id:"state", zh:"国情", py:"guóqíng", name:"China today: the state", icon:"国", color:"#b8232f", wiki:"Tiananmen",
  lead:"Key facts about the {中华人民共和国|Zhōnghuá Rénmín Gònghéguó|People's Republic of China}: symbols, government, population and geography.",
  sections:[
    { title:"Key facts", cards:[
      { h:"Capital and founding date", t:"The capital is {北京|Běijīng|Beijing}. The PRC was proclaimed on 1 October 1949; the day is celebrated as {国庆节|Guóqìngjié|National Day}." },
      { h:"Territory", t:"About 9.6 million km² — one of the largest countries in the world. The whole country runs on a single time, {北京时间|Běijīng shíjiān|Beijing time} (UTC+8)." },
      { h:"Population", t:"The 2020 census counted 1,411,778,724 people (excluding Hong Kong, Macau and Taiwan). The {汉族|Hànzú|Han people} make up ≈91.1%." },
      { h:"Language", t:"The national language is {普通话|Pǔtōnghuà|Putonghua, “common speech”}, written in {简体字|jiǎntǐzì|simplified characters}." },
      { h:"Currency", t:"{人民币|Rénmínbì|Renminbi, “the people's currency”}; the basic unit is the {元|yuán|yuan}: 1 yuan = 10 {角|jiǎo|jiao} = 100 {分|fēn|fen}." },
      { h:"Ethnic groups", t:"56 {民族|mínzú|ethnic groups} are officially recognised. The largest minorities include the {壮族|Zhuàngzú|Zhuang}, {维吾尔族|Wéiwú'ěrzú|Uyghurs}, {回族|Huízú|Hui}, {苗族|Miáozú|Miao} and {满族|Mǎnzú|Manchu}." }
    ]},
    { title:"State symbols", cards:[
      { h:"Flag", t:"The {五星红旗|Wǔxīng Hóngqí|“Five-starred Red Flag”}: a red field with one large yellow star and four smaller ones." },
      { h:"Anthem", t:"{义勇军进行曲|Yìyǒngjūn Jìnxíngqǔ|“March of the Volunteers”} — music by {聂耳|Niè Ěr|Nie Er}, lyrics by {田汉|Tián Hàn|Tian Han} (1935)." },
      { h:"Emblem", t:"The {国徽|guóhuī|national emblem} shows the {天安门|Tiān'ānmén|Tiananmen, “Gate of Heavenly Peace”} beneath five stars, framed by ears of grain and a cogwheel." }
    ]},
    { title:"Political system", cards:[
      { h:"Legislature", t:"The {全国人民代表大会|Quánguó Rénmín Dàibiǎo Dàhuì|National People's Congress (NPC)} is, under the Constitution, the highest organ of state power." },
      { h:"Government", t:"The {国务院|Guówùyuàn|State Council} is the central government, headed by the {总理|zǒnglǐ|premier}. The head of state is the {国家主席|guójiā zhǔxí|President of the PRC}." },
      { h:"Ruling party", t:"The Constitution establishes the leading role of the {中国共产党|Zhōngguó Gòngchǎndǎng|Communist Party of China}." }
    ]},
    { title:"Administrative divisions", cards:[
      { h:"34 provincial-level divisions (in the PRC's official position)", t:"23 {省|shěng|provinces} (including Taiwan, which the PRC does not control), 5 {自治区|zìzhìqū|autonomous regions}, 4 {直辖市|zhíxiáshì|municipalities} and 2 {特别行政区|tèbié xíngzhèngqū|special administrative regions}. See the interactive map for details." }
    ]},
    { title:"Geography", cards:[
      { h:"Highest point", t:"{珠穆朗玛峰|Zhūmùlǎngmǎ Fēng|Qomolangma (Mount Everest)} — 8,848.86 m (joint China–Nepal measurement, 2020)." },
      { h:"Great rivers", t:"The {长江|Cháng Jiāng|Yangtze, “Long River”} (~6,300 km, the longest in Asia) and the {黄河|Huáng Hé|Yellow River} (~5,460 km), called “the mother of Chinese civilisation”." },
      { h:"Neighbours", t:"China shares land borders with 14 countries — together with Russia, the most in the world." }
    ]}
  ],
  vocab:[["中国","Zhōngguó","China"],["中华人民共和国","Zhōnghuá Rénmín Gònghéguó","PRC"],["首都","shǒudū","capital city"],["国旗","guóqí","national flag"],["国歌","guógē","national anthem"],["人民币","Rénmínbì","renminbi"],["元","yuán","yuan"],["人口","rénkǒu","population"],["民族","mínzú","ethnic group, nationality"],["省","shěng","province"],["普通话","Pǔtōnghuà","Putonghua (Mandarin)"],["长江","Cháng Jiāng","Yangtze"],["黄河","Huáng Hé","Yellow River"]],
  quiz:[
    {q:"When was the PRC proclaimed?",a:["1 October 1949","1 January 1912","1 July 1997","10 October 1911"],c:0,e:"1 October 1949 — {国庆节|Guóqìngjié|National Day}."},
    {q:"What is China's currency called?",a:["人民币 Rénmínbì","日元 rìyuán","美元 měiyuán","港币 gǎngbì"],c:0,e:"Renminbi; the unit is the yuan."},
    {q:"How many ethnic groups are officially recognised in the PRC?",a:["56","34","12","100"],c:0,e:"56 {民族|mínzú|ethnic groups}; the Han are ≈91%."},
    {q:"What is shown on the PRC's emblem?",a:["Tiananmen Gate","The Great Wall","A dragon","A panda"],c:0,e:"Tiananmen beneath five stars."},
    {q:"How many time zones does China officially use?",a:["One","Three","Five","Four"],c:0,e:"The whole country uses Beijing time (UTC+8)."}
  ],
  sources:[["NBS China — 7th National Population Census (Communiqué No.3)","https://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817188.html"],["Britannica — China","https://www.britannica.com/place/China"],["Gov.cn — China ABC","https://english.www.gov.cn/archive/chinaabc/"],["Wikipedia — Administrative divisions of China","https://en.wikipedia.org/wiki/Administrative_divisions_of_China"]]
},
{
  id:"language", zh:"汉语与汉字", py:"Hànyǔ yǔ Hànzì", name:"Language and characters", icon:"字", color:"#1f3a5f", wiki:"Oracle_bone_script", widget:"tones",
  lead:"Chinese is a tonal language, and its script is one of the oldest continuously used writing systems in the world.",
  sections:[
    { title:"What the language is called", cards:[
      { h:"Three names", t:"{汉语|Hànyǔ|“language of the Han”}, {中文|Zhōngwén|Chinese (mainly written)}, {普通话|Pǔtōnghuà|standard Mandarin}." },
      { h:"Dialects", t:"There are major {方言|fāngyán|dialect} groups: {粤语|Yuèyǔ|Cantonese}, {吴语|Wúyǔ|Wu (Shanghai)}, {闽语|Mǐnyǔ|Min (Fujian, Taiwan)} and others. Speakers of different groups often can't understand each other's speech, but they read the same characters." }
    ]},
    { title:"Tones", cards:[
      { h:"Four tones + the neutral tone", t:"The same syllable with different tones gives different words: {妈|mā|mother} (1st, level), {麻|má|hemp} (2nd, rising), {马|mǎ|horse} (3rd, falling-rising), {骂|mà|to scold} (4th, falling), {吗|ma|question particle} (neutral). Tap the buttons below to listen." }
    ]},
    { title:"Pinyin", cards:[
      { h:"Romanisation", t:"{拼音|pīnyīn|“spelling sounds”} was officially adopted in the PRC in 1958 and became the international standard ISO 7098 in 1982. Tones are marked with diacritics: ā á ǎ à." }
    ]},
    { title:"Characters", cards:[
      { h:"The oldest script", t:"{甲骨文|jiǎgǔwén|writing on bones and shells} of the Shang era (≈1250–1050 BC) was found at Anyang, Henan province." },
      { h:"How characters are formed", t:"{象形|xiàngxíng|pictograms}: 山 “mountain”, 木 “tree”. {会意|huìyì|compound ideograms}: 休 “to rest” = person 亻 + tree 木. {形声|xíngshēng|phono-semantic compounds} (meaning component + sound component) — the vast majority of characters, e.g. 妈 = 女 “woman” + 马 mǎ (sound)." },
      { h:"Radicals", t:"A {部首|bùshǒu|radical} is the graphic component used to order characters in dictionaries: 氵 “water”, 木 “tree”, 口 “mouth”, 亻 “person”." },
      { h:"How many characters you need", t:"The {康熙字典|Kāngxī Zìdiǎn|Kangxi Dictionary} (1716) lists over 47,000 characters, but about 3,000 are enough to read a newspaper fluently." },
      { h:"Simplified and traditional", t:"{简体字|jiǎntǐzì|simplified} — mainland China, Singapore; {繁体字|fántǐzì|traditional} — Hong Kong, Macau, Taiwan. Example: 龙 / 龍 “dragon”, 马 / 馬 “horse”." }
    ]},
    { title:"Exams", cards:[
      { h:"HSK", t:"The {汉语水平考试|Hànyǔ Shuǐpíng Kǎoshì|Chinese Proficiency Test} is the international certificate for non-native speakers." }
    ]}
  ],
  vocab:[["汉语","Hànyǔ","Chinese language"],["汉字","Hànzì","Chinese character"],["拼音","pīnyīn","pinyin"],["声调","shēngdiào","tone"],["笔画","bǐhuà","stroke"],["部首","bùshǒu","radical"],["词典","cídiǎn","dictionary"],["说","shuō","to speak"],["写","xiě","to write"],["读","dú","to read"],["学习","xuéxí","to study"],["老师","lǎoshī","teacher"],["学生","xuésheng","student"],["你好","nǐ hǎo","hello"]],
  quiz:[
    {q:"How many main tones does Mandarin have?",a:["4 (+ neutral)","2","6","9"],c:0,e:"Four tones and the neutral tone."},
    {q:"What does 马 mǎ mean?",a:["horse","mother","to scold","hemp"],c:0,e:"妈 mā — mother, 麻 má — hemp, 骂 mà — to scold."},
    {q:"When was pinyin officially adopted?",a:["1958","1912","1949","1990"],c:0,e:"In 1958; ISO standard since 1982."},
    {q:"What is the oldest large body of Chinese writing called?",a:["甲骨文 jiǎgǔwén","楷书 kǎishū","草书 cǎoshū","拼音 pīnyīn"],c:0,e:"Shang-era inscriptions on bones."},
    {q:"Where are traditional characters used?",a:["Hong Kong, Macau, Taiwan","Beijing and Shanghai","Singapore","Everywhere equally"],c:0,e:"The mainland and Singapore use simplified characters."},
    {q:"Which part of 妈 indicates its sound?",a:["马","女","Both","Neither"],c:0,e:"女 is the meaning component, 马 is the sound component."}
  ],
  sources:[["Britannica — Chinese languages","https://www.britannica.com/topic/Chinese-languages"],["Wikipedia — Chinese characters","https://en.wikipedia.org/wiki/Chinese_characters"],["Wikipedia — Pinyin","https://en.wikipedia.org/wiki/Pinyin"],["Wikipedia — Oracle bone script","https://en.wikipedia.org/wiki/Oracle_bone_script"]]
},
{
  id:"history", zh:"朝代", py:"cháodài", name:"History and dynasties", icon:"史", color:"#8a5a2b", wiki:"Great_Wall_of_China", widget:"timeline",
  lead:"Over three millennia of written history: from the legendary Xia to the modern republic. Knowing the order of dynasties helps with everything from poetry to porcelain.",
  sections:[
    { title:"Key turning points", cards:[
      { h:"First unification (221 BC)", t:"{秦始皇|Qín Shǐhuáng|the First Emperor of Qin} united the warring states and standardised writing, measures and coinage. The European name “China” probably derives from Qin." },
      { h:"Han — “the Han people”", t:"The {汉|Hàn|Han} dynasty (206 BC – 220 AD) gave its name to the main ethnic group and the language: {汉人|Hànrén|Han Chinese}, {汉语|Hànyǔ|Chinese language}." },
      { h:"Tang — the golden age", t:"{唐|Táng|Tang} (618–907): the flowering of poetry, the cosmopolitan capital {长安|Cháng'ān|Chang'an}, the Silk Road." },
      { h:"End of the empire", t:"The {辛亥革命|Xīnhài Gémìng|Xinhai Revolution} (1911) overthrew the Qing dynasty; on 1 January 1912 the {中华民国|Zhōnghuá Mínguó|Republic of China} was proclaimed." }
    ]},
    { title:"The Silk Road", cards:[
      { h:"丝绸之路", t:"The {丝绸之路|Sīchóu zhī Lù|Silk Road} was a network of trade routes linking China, Central Asia and the Mediterranean. The term was coined by the German geographer Ferdinand von Richthofen in 1877." }
    ]}
  ],
  timeline:[
    ["夏","Xià","Xia","c. 2070–1600 BC","Traditionally the first dynasty; archaeologically debated."],
    ["商","Shāng","Shang","c. 1600–1046 BC","Bronze casting, oracle-bone writing."],
    ["周","Zhōu","Zhou","1046–256 BC","Confucius and Laozi lived in the {春秋|Chūnqiū|Spring and Autumn} period; then came the {战国|Zhànguó|Warring States}."],
    ["秦","Qín","Qin","221–206 BC","First unification, the Terracotta Army."],
    ["汉","Hàn","Han","206 BC – 220 AD","Silk Road, paper, Confucianism as state ideology."],
    ["三国","Sānguó","Three Kingdoms","220–280","Wei, Shu and Wu — the story of the novel “Romance of the Three Kingdoms”."],
    ["晋","Jìn","Jin","266–420","Calligrapher Wang Xizhi."],
    ["南北朝","Nán-Běi Cháo","Northern and Southern Dynasties","420–589","Spread of Buddhism, cave temples."],
    ["隋","Suí","Sui","581–618","The Grand Canal, beginnings of the imperial examinations."],
    ["唐","Táng","Tang","618–907","Li Bai, Du Fu; woodblock printing."],
    ["五代十国","Wǔdài Shíguó","Five Dynasties and Ten Kingdoms","907–979","Fragmentation."],
    ["宋","Sòng","Song","960–1279","Movable type, the compass, gunpowder, painting."],
    ["元","Yuán","Yuan","1271–1368","Kublai Khan's Mongol dynasty; Marco Polo."],
    ["明","Míng","Ming","1368–1644","The Forbidden City, today's Great Wall, Zheng He's voyages."],
    ["清","Qīng","Qing","1644–1912","The Manchu dynasty, the last imperial one."],
    ["中华民国","Zhōnghuá Mínguó","Republic of China","1912–1949 (on the mainland)","Sun Yat-sen; after 1949 on Taiwan."],
    ["中华人民共和国","Zhōnghuá Rénmín Gònghéguó","PRC","since 1949","The modern state."]
  ],
  vocab:[["历史","lìshǐ","history"],["朝代","cháodài","dynasty"],["皇帝","huángdì","emperor"],["秦始皇","Qín Shǐhuáng","First Emperor of Qin"],["古代","gǔdài","antiquity"],["现代","xiàndài","modern times"],["世纪","shìjì","century"],["公元","gōngyuán","AD (Common Era)"],["公元前","gōngyuán qián","BC"],["丝绸之路","Sīchóu zhī Lù","Silk Road"],["革命","gémìng","revolution"]],
  quiz:[
    {q:"Who first unified China in 221 BC?",a:["Qin Shi Huang","Confucius","Kublai Khan","Sun Yat-sen"],c:0,e:"秦始皇 Qín Shǐhuáng."},
    {q:"Which dynasty gave its name to the Han people?",a:["Han","Tang","Ming","Qing"],c:0,e:"汉 Hàn: 汉人, 汉语, 汉字."},
    {q:"Which was the last imperial dynasty?",a:["Qing","Ming","Yuan","Song"],c:0,e:"清 Qīng, 1644–1912."},
    {q:"In which era did Li Bai and Du Fu live?",a:["Tang","Han","Qin","Yuan"],c:0,e:"The golden age of poetry — 唐 Táng."},
    {q:"Which dynasty was Mongol?",a:["Yuan","Ming","Sui","Zhou"],c:0,e:"元 Yuán, founded by Kublai Khan."},
    {q:"Correct order:",a:["Han → Tang → Song → Ming","Tang → Han → Ming → Song","Ming → Song → Tang → Han","Song → Han → Ming → Tang"],c:0,e:"A common mnemonic: Han, Tang, Song, Yuan, Ming, Qing."}
  ],
  sources:[["Britannica — History of China","https://www.britannica.com/topic/history-of-China"],["Wikipedia — Dynasties of China","https://en.wikipedia.org/wiki/Dynasties_of_China"],["Wikipedia — Silk Road","https://en.wikipedia.org/wiki/Silk_Road"]]
},
{
  id:"philosophy", zh:"儒释道", py:"Rú Shì Dào", name:"Philosophy and religion", icon:"道", color:"#2e6b5e", wiki:"Temple_of_Confucius,_Qufu",
  lead:"Three teachings — Confucianism, Buddhism and Taoism — have coexisted for centuries, shaping the Chinese worldview, ethics and art.",
  sections:[
    { title:"Confucianism 儒家", cards:[
      { h:"Confucius", t:"{孔子|Kǒngzǐ|Confucius, “Master Kong”} (551–479 BC) came from the state of Lu (today's Shandong). His sayings are collected in the {论语|Lúnyǔ|“Analects”}." },
      { h:"Core values", t:"{仁|rén|benevolence}, {义|yì|righteousness, duty}, {礼|lǐ|ritual, propriety}, {孝|xiào|filial piety}, {智|zhì|wisdom}, {信|xìn|trustworthiness}." },
      { h:"Influence", t:"From the Han onward Confucianism underpinned state education and the {科举|kējǔ|imperial examinations}, which lasted until 1905." }
    ]},
    { title:"Taoism 道家 / 道教", cards:[
      { h:"Laozi and Zhuangzi", t:"{老子|Lǎozǐ|Laozi} is the traditional author of the {道德经|Dàodéjīng|“Tao Te Ching”}; {庄子|Zhuāngzǐ|Zhuangzi} wrote parables, including the butterfly dream." },
      { h:"Ideas", t:"The {道|dào|Way} is the source of all things; {无为|wúwéi|non-action, acting without forcing}; {阴阳|yīnyáng|yin and yang} — complementary opposites." },
      { h:"Philosophy and religion", t:"One distinguishes the philosophical school {道家|Dàojiā|Taoist school} from the religion {道教|Dàojiào|Taoism as a religion}, with temples, priests and sacred mountains (such as Wudang)." }
    ]},
    { title:"Buddhism 佛教", cards:[
      { h:"Arrival from India", t:"{佛教|Fójiào|Buddhism} reached China around the 1st century AD. In the 7th century the monk {玄奘|Xuánzàng|Xuanzang} travelled to India for sutras — the basis of the novel “Journey to the West”." },
      { h:"Chan", t:"{禅宗|Chánzōng|Chan school} is the Chinese school of meditative Buddhism that became Zen in Japan. The {少林寺|Shàolín Sì|Shaolin Monastery} was founded in 495." }
    ]},
    { title:"Today", cards:[
      { h:"Officially recognised religions", t:"Five religions are officially registered in the PRC: Buddhism, Taoism, Islam, Catholicism and Protestantism. Ancestor veneration is also widespread." }
    ]}
  ],
  vocab:[["哲学","zhéxué","philosophy"],["孔子","Kǒngzǐ","Confucius"],["儒家","Rújiā","Confucianism"],["老子","Lǎozǐ","Laozi"],["道","dào","the Way, Tao"],["阴阳","yīnyáng","yin and yang"],["佛教","Fójiào","Buddhism"],["寺庙","sìmiào","temple"],["仁","rén","benevolence"],["孝","xiào","filial piety"],["礼","lǐ","ritual, propriety"],["和谐","héxié","harmony"]],
  quiz:[
    {q:"What is the collection of Confucius's sayings called?",a:["论语 Lúnyǔ","道德经 Dàodéjīng","诗经 Shījīng","孙子兵法"],c:0,e:"The “Analects”."},
    {q:"What does 无为 wúwéi mean?",a:["non-action","benevolence","ritual","filial piety"],c:0,e:"A key Taoist concept."},
    {q:"Where did Buddhism come to China from?",a:["India","Japan","Persia","Mongolia"],c:0,e:"Around the 1st century AD."},
    {q:"Which value means respect for one's parents?",a:["孝 xiào","仁 rén","义 yì","智 zhì"],c:0,e:"孝 — filial piety."},
    {q:"Which Chinese school of Buddhism became Zen in Japan?",a:["Chan","Tiantai","Tibetan Buddhism","Pure Land"],c:0,e:"禅 chán → zen."}
  ],
  sources:[["Stanford Encyclopedia of Philosophy — Confucius","https://plato.stanford.edu/entries/confucius/"],["Stanford Encyclopedia of Philosophy — Laozi","https://plato.stanford.edu/entries/laozi/"],["Britannica — Confucianism","https://www.britannica.com/topic/Confucianism"],["Wikipedia — Chinese Buddhism","https://en.wikipedia.org/wiki/Chinese_Buddhism"]]
},
{
  id:"festivals", zh:"传统节日", py:"chuántǒng jiérì", name:"Festivals", icon:"节", color:"#c43a31", wiki:"Chinese_New_Year",
  lead:"Most traditional festivals follow the lunisolar {农历|nónglì|agricultural (lunar) calendar}, so their dates change every year.",
  sections:[
    { title:"Spring Festival (Chinese New Year)", cards:[
      { h:"春节 — 1st day of the 1st month", t:"{春节|Chūnjié|Spring Festival} falls between 21 January and 20 February. In 2024 UNESCO inscribed it on the list of the Intangible Cultural Heritage of Humanity." },
      { h:"Customs", t:"On {除夕|Chúxī|New Year's Eve} the family gathers for the {年夜饭|niányèfàn|reunion dinner}; in the north people make {饺子|jiǎozi|dumplings}. Children receive {红包|hóngbāo|red envelopes with money}, doors are decorated with {春联|chūnlián|New Year couplets}, and {鞭炮|biānpào|firecrackers} are set off." },
      { h:"Upside-down 福", t:"The character {福|fú|good fortune} is hung upside down: “upside down” {倒|dào|inverted} sounds like {到|dào|arrived} — “fortune has arrived”." },
      { h:"Greetings", t:"{新年快乐|Xīnnián kuàilè|Happy New Year!}, {恭喜发财|Gōngxǐ fācái|Wishing you prosperity!}, {拜年|bàinián|paying New Year visits}." }
    ]},
    { title:"Other festivals", cards:[
      { h:"元宵节 — 15th day of the 1st month", t:"The {元宵节|Yuánxiāojié|Lantern Festival} closes the New Year period: people eat {汤圆|tāngyuán|sweet rice balls} and solve {灯谜|dēngmí|lantern riddles}." },
      { h:"清明节 — 4 or 5 April", t:"The {清明节|Qīngmíngjié|Qingming (Tomb-Sweeping) Festival} honours ancestors: {扫墓|sǎomù|sweeping the graves} and spring outings {踏青|tàqīng|“treading the green”}. Its date follows the solar calendar." },
      { h:"端午节 — 5th day of the 5th month", t:"The {端午节|Duānwǔjié|Dragon Boat Festival} is linked to the poet {屈原|Qū Yuán|Qu Yuan}. People hold {赛龙舟|sài lóngzhōu|dragon-boat races} and eat {粽子|zòngzi|sticky rice in bamboo leaves}. UNESCO — 2009." },
      { h:"七夕 — 7th day of the 7th month", t:"{七夕|Qīxī|Qixi, the “Chinese Valentine's Day”} — the legend of {牛郎织女|Niúláng Zhīnǚ|the Cowherd and the Weaver Girl}, who meet once a year on a bridge of magpies." },
      { h:"中秋节 — 15th day of the 8th month", t:"{中秋节|Zhōngqiūjié|Mid-Autumn Festival}: people admire the full moon ({赏月|shǎngyuè|moon-gazing}), eat {月饼|yuèbing|mooncakes} and recall the goddess {嫦娥|Cháng'é|Chang'e}. The central idea is {团圆|tuányuán|family reunion}." },
      { h:"重阳节 — 9th day of the 9th month", t:"{重阳节|Chóngyángjié|Double Ninth Festival}: {登高|dēnggāo|climbing to a height}, chrysanthemums; today also Seniors' Day." },
      { h:"国庆节 — 1 October", t:"A national holiday; together with weekends it forms the {黄金周|huángjīnzhōu|“Golden Week”}." }
    ]}
  ],
  vocab:[["节日","jiérì","festival"],["春节","Chūnjié","Spring Festival"],["新年快乐","Xīnnián kuàilè","Happy New Year!"],["红包","hóngbāo","red envelope"],["饺子","jiǎozi","dumplings"],["灯笼","dēnglong","lantern"],["月饼","yuèbing","mooncake"],["粽子","zòngzi","zongzi rice dumpling"],["龙舟","lóngzhōu","dragon boat"],["鞭炮","biānpào","firecrackers"],["农历","nónglì","lunar calendar"],["团圆","tuányuán","family reunion"]],
  quiz:[
    {q:"What do people eat at the Mid-Autumn Festival?",a:["月饼 yuèbing","粽子 zòngzi","汤圆 tāngyuán","饺子 jiǎozi"],c:0,e:"Mooncakes."},
    {q:"Which poet is the Dragon Boat Festival linked to?",a:["Qu Yuan","Li Bai","Du Fu","Su Shi"],c:0,e:"屈原 Qū Yuán."},
    {q:"Why is 福 hung upside down?",a:["倒 dào sounds like 到 dào “arrived”","It looks nicer","A printer's mistake","It is a sign of grief"],c:0,e:"“Fortune has arrived”."},
    {q:"When is the Lantern Festival?",a:["15th day of the 1st month","1st day of the 1st month","5th day of the 5th month","15th day of the 8th month"],c:0,e:"元宵节 — the first full moon of the year."},
    {q:"Which festival follows the solar calendar?",a:["Qingming","Chunjie","Duanwu","Zhongqiu"],c:0,e:"清明 is one of the 24 solar terms, 4–5 April."},
    {q:"What is a 红包?",a:["A red envelope with money","A lantern","A firecracker","A New Year couplet"],c:0,e:"Given to children and young people."}
  ],
  sources:[["UNESCO ICH — China (Spring Festival, 2024; Dragon Boat Festival, 2009)","https://ich.unesco.org/en/state/china-CN"],["Wikipedia — Chinese New Year","https://en.wikipedia.org/wiki/Chinese_New_Year"],["Wikipedia — Mid-Autumn Festival","https://en.wikipedia.org/wiki/Mid-Autumn_Festival"],["Wikipedia — Dragon Boat Festival","https://en.wikipedia.org/wiki/Dragon_Boat_Festival"]]
},
{
  id:"cuisine", zh:"饮食文化", py:"yǐnshí wénhuà", name:"Cuisine", icon:"食", color:"#d0794a", wiki:"Peking_duck", widget:"cuisines",
  lead:"The Chinese say: {民以食为天|mín yǐ shí wéi tiān|“For the people, food is heaven”}. Every region has its own flavour.",
  sections:[
    { title:"North and south", cards:[
      { h:"Wheat or rice", t:"Traditionally {南米北面|nán mǐ běi miàn|“rice in the south, flour in the north”}: in the north — {面条|miàntiáo|noodles}, {馒头|mántou|steamed buns}, {饺子|jiǎozi|dumplings}; in the south — {米饭|mǐfàn|cooked rice}." }
    ]},
    { title:"The Eight Great Cuisines 八大菜系", cards:[
      { h:"The classification", t:"{鲁菜|Lǔcài|Shandong}, {川菜|Chuāncài|Sichuan}, {粤菜|Yuècài|Guangdong (Cantonese)}, {苏菜|Sūcài|Jiangsu}, {闽菜|Mǐncài|Fujian}, {浙菜|Zhècài|Zhejiang}, {湘菜|Xiāngcài|Hunan}, {徽菜|Huīcài|Anhui}. The map below shows their regions." },
      { h:"Flavours", t:"Sichuan — {麻辣|málà|numbing and spicy}; Guangdong — freshness and delicacy, {点心|diǎnxin|dim sum} with {早茶|zǎochá|morning tea}; Hunan — {香辣|xiānglà|fragrant and hot}; Jiangsu and Zhejiang — slightly sweet." }
    ]},
    { title:"Famous dishes", cards:[
      { h:"Peking duck", t:"{北京烤鸭|Běijīng kǎoyā|Peking duck} is served with thin pancakes, spring onion and sweet bean sauce." },
      { h:"Hot pot", t:"{火锅|huǒguō|“fire pot”}: diners cook ingredients themselves at the table in a simmering broth." },
      { h:"Sichuan classics", t:"{麻婆豆腐|mápó dòufu|mapo tofu}, {宫保鸡丁|gōngbǎo jīdīng|Kung Pao chicken}, {回锅肉|huíguōròu|twice-cooked pork}." },
      { h:"Noodles", t:"{兰州牛肉面|Lánzhōu niúròu miàn|Lanzhou beef noodles} are pulled by hand ({拉面|lāmiàn|hand-pulled noodles})." }
    ]},
    { title:"Table etiquette", cards:[
      { h:"Chopsticks", t:"{筷子|kuàizi|chopsticks}: don't stick them upright in rice — it resembles incense sticks at a funeral." },
      { h:"Shared dishes", t:"Dishes are placed in the centre and shared; often the host pays for everyone ({请客|qǐngkè|to treat})." },
      { h:"Toast", t:"{干杯|gānbēi|“bottoms up”} is the most common toast." }
    ]}
  ],
  vocab:[["吃","chī","to eat"],["喝","hē","to drink"],["米饭","mǐfàn","cooked rice"],["面条","miàntiáo","noodles"],["饺子","jiǎozi","dumplings"],["包子","bāozi","steamed buns"],["豆腐","dòufu","tofu"],["筷子","kuàizi","chopsticks"],["辣","là","spicy"],["甜","tián","sweet"],["好吃","hǎochī","delicious"],["干杯","gānbēi","cheers!"],["餐厅","cāntīng","restaurant"],["菜单","càidān","menu"]],
  quiz:[
    {q:"Which cuisine is known for the 麻辣 flavour?",a:["Sichuan","Cantonese","Shandong","Jiangsu"],c:0,e:"Sichuan pepper 花椒 gives the “numbing” effect."},
    {q:"What is 早茶?",a:["Morning tea with dim sum","Green tea","New Year's dinner","A night market"],c:0,e:"A tradition of Guangdong and Hong Kong."},
    {q:"How many “great cuisines” are traditionally recognised?",a:["8","4","5","12"],c:0,e:"八大菜系."},
    {q:"Why shouldn't you stick chopsticks upright in rice?",a:["It resembles funeral incense","The chopsticks will break","It insults the cook","The rice gets cold"],c:0,e:"It evokes a memorial ritual."},
    {q:"What does 好吃 mean?",a:["delicious","spicy","sweet","expensive"],c:0,e:"hǎochī — tasty."}
  ],
  sources:[["Wikipedia — Chinese cuisine","https://en.wikipedia.org/wiki/Chinese_cuisine"],["Wikipedia — Sichuan cuisine","https://en.wikipedia.org/wiki/Sichuan_cuisine"],["Wikipedia — Cantonese cuisine","https://en.wikipedia.org/wiki/Cantonese_cuisine"]]
},
{
  id:"tea", zh:"茶文化", py:"chá wénhuà", name:"Tea culture", icon:"茶", color:"#4f7a3a", wiki:"Chinese_tea", widget:"teas",
  lead:"China is the homeland of tea. In 2022 UNESCO inscribed China's traditional tea-processing techniques and associated social practices on its Intangible Heritage list.",
  sections:[
    { title:"History", cards:[
      { h:"The Classic of Tea", t:"{陆羽|Lù Yǔ|Lu Yu} wrote the {茶经|Chájīng|“Classic of Tea”} during the Tang dynasty (8th century) — the world's first book about tea." },
      { h:"The word “tea”", t:"Words like Russian and Ukrainian “chai” come from the northern {茶|chá|tea}, while English “tea” comes from the southern Fujian (Min) pronunciation “te”." }
    ]},
    { title:"Six categories 六大茶类", cards:[
      { h:"By degree of oxidation", t:"{绿茶|lǜchá|green}, {白茶|báichá|white}, {黄茶|huángchá|yellow}, {青茶|qīngchá|oolong (blue-green)}, {红茶|hóngchá|“red” = black tea in the West}, {黑茶|hēichá|dark, post-fermented}. See the interactive scale below." }
    ]},
    { title:"Famous teas", cards:[
      { h:"Green", t:"{西湖龙井|Xīhú Lóngjǐng|Longjing, Hangzhou}, {碧螺春|Bìluóchūn|Biluochun, Suzhou}." },
      { h:"Oolong", t:"{铁观音|Tiěguānyīn|Tieguanyin, Anxi}, {大红袍|Dàhóngpáo|Da Hong Pao, Wuyi Mountains} — both from Fujian." },
      { h:"Dark and black", t:"{普洱|Pǔ'ěr|Pu'er, Yunnan}; {祁门红茶|Qímén hóngchá|Keemun, Anhui}." }
    ]},
    { title:"The tea ceremony", cards:[
      { h:"Gongfu cha", t:"{功夫茶|gōngfu chá|“tea made with skill”} — brewing in small portions in a {盖碗|gàiwǎn|lidded bowl} or a {紫砂壶|zǐshāhú|Yixing clay teapot}." },
      { h:"A gesture of thanks", t:"When someone refills your cup, you can lightly tap the table with two fingers — {叩指礼|kòuzhǐlǐ|finger-tapping thanks}." },
      { h:"Teahouse", t:"The {茶馆|cháguǎn|teahouse} is a traditional place to socialise, especially in Chengdu." }
    ]}
  ],
  vocab:[["茶","chá","tea"],["绿茶","lǜchá","green tea"],["红茶","hóngchá","black tea"],["乌龙茶","wūlóngchá","oolong"],["普洱茶","pǔ'ěrchá","pu'er"],["茶杯","chábēi","teacup"],["茶壶","cháhú","teapot"],["茶馆","cháguǎn","teahouse"],["泡茶","pào chá","to brew tea"],["请喝茶","qǐng hē chá","please have some tea"]],
  quiz:[
    {q:"Who wrote the “Classic of Tea”?",a:["Lu Yu","Confucius","Li Bai","Laozi"],c:0,e:"陆羽, Tang dynasty."},
    {q:"What do the Chinese call 红茶 (“red tea”)?",a:["Black tea","Hibiscus","Oolong","Pu'er"],c:0,e:"The infusion is red."},
    {q:"Where does 龙井 tea come from?",a:["Hangzhou (Zhejiang)","Yunnan","Tibet","Hainan"],c:0,e:"West Lake."},
    {q:"What is a 盖碗?",a:["A lidded bowl","A clay teapot","A teahouse","Tea leaves"],c:0,e:"gàiwǎn."},
    {q:"How many main categories of tea are there?",a:["6","3","4","8"],c:0,e:"六大茶类."}
  ],
  sources:[["UNESCO ICH — Traditional tea processing techniques in China (2022)","https://ich.unesco.org/en/state/china-CN"],["Wikipedia — Chinese tea","https://en.wikipedia.org/wiki/Chinese_tea"],["Wikipedia — The Classic of Tea","https://en.wikipedia.org/wiki/The_Classic_of_Tea"]]
}
);
window.TOPICS = window.TOPICS || [];
window.TOPICS.push(
{
  id:"arts", zh:"艺术", py:"yìshù", name:"Arts", icon:"艺", color:"#6b3f6e", wiki:"Peking_opera",
  lead:"Calligraphy, ink painting, opera, paper-cutting and porcelain are hallmarks of Chinese aesthetics.",
  sections:[
    { title:"Calligraphy 书法", cards:[
      { h:"The Four Treasures of the Study", t:"{文房四宝|wénfáng sìbǎo|the Four Treasures of the Study}: {笔|bǐ|brush}, {墨|mò|ink}, {纸|zhǐ|paper}, {砚|yàn|inkstone}." },
      { h:"Script styles", t:"{篆书|zhuànshū|seal script}, {隶书|lìshū|clerical script}, {楷书|kǎishū|regular script}, {行书|xíngshū|running script}, {草书|cǎoshū|cursive “grass” script}." },
      { h:"The “Sage of Calligraphy”", t:"{王羲之|Wáng Xīzhī|Wang Xizhi} (4th c.) wrote the celebrated {兰亭集序|Lántíng Jí Xù|“Preface to the Orchid Pavilion Poems”} (353 AD). Chinese calligraphy has been on the UNESCO list since 2009." }
    ]},
    { title:"Painting 国画", cards:[
      { h:"Genres", t:"{山水画|shānshuǐhuà|“mountains and water” — landscape}, {花鸟画|huāniǎohuà|flowers and birds}, {人物画|rénwùhuà|figure painting}." },
      { h:"Techniques", t:"{工笔|gōngbǐ|“meticulous brush” — detailed style} and {写意|xiěyì|“sketching the idea” — freehand style}." },
      { h:"The Four Gentlemen", t:"{四君子|sì jūnzǐ|the Four Gentlemen}: {梅|méi|plum blossom (resilience)}, {兰|lán|orchid (refinement)}, {竹|zhú|bamboo (integrity)}, {菊|jú|chrysanthemum (seclusion)}." }
    ]},
    { title:"Peking opera 京剧", cards:[
      { h:"Origins", t:"{京剧|Jīngjù|Peking opera} took shape in Beijing after 1790, based on troupes from Anhui and Hubei. UNESCO — 2010." },
      { h:"Role types", t:"{生|shēng|male roles}, {旦|dàn|female roles}, {净|jìng|“painted faces”}, {丑|chǒu|clown}." },
      { h:"Face painting", t:"{脸谱|liǎnpǔ|opera face make-up}: red stands for loyalty and courage (e.g. {关羽|Guān Yǔ|Guan Yu}), black for uprightness, white for treachery (classically {曹操|Cáo Cāo|Cao Cao})." }
    ]},
    { title:"Folk arts", cards:[
      { h:"Paper-cutting", t:"{剪纸|jiǎnzhǐ|red paper-cuts} decorate windows at festivals. UNESCO — 2009." },
      { h:"Chinese knot", t:"The {中国结|Zhōngguó jié|Chinese decorative knot} symbolises luck and unity." },
      { h:"Musical instruments", t:"{古琴|gǔqín|guqin, seven-string zither} (UNESCO), {古筝|gǔzhēng|guzheng}, {二胡|èrhú|erhu, two-string fiddle}, {琵琶|pípa|pipa, lute}." }
    ]},
    { title:"Porcelain 瓷器", cards:[
      { h:"“china” = porcelain", t:"In English, “china” also means porcelain. {景德镇|Jǐngdézhèn|Jingdezhen} in Jiangxi is the “porcelain capital”; the famous {青花瓷|qīnghuācí|blue-and-white porcelain} matured under the Yuan." }
    ]}
  ],
  vocab:[["艺术","yìshù","art"],["书法","shūfǎ","calligraphy"],["毛笔","máobǐ","writing brush"],["画","huà","to paint; painting"],["山水画","shānshuǐhuà","landscape painting"],["京剧","Jīngjù","Peking opera"],["脸谱","liǎnpǔ","opera face make-up"],["剪纸","jiǎnzhǐ","paper-cutting"],["瓷器","cíqì","porcelain"],["音乐","yīnyuè","music"],["二胡","èrhú","erhu"]],
  quiz:[
    {q:"Which is NOT one of the Four Treasures of the Study?",a:["A seal","A brush","Ink","An inkstone"],c:0,e:"笔、墨、纸、砚."},
    {q:"Who is called the “Sage of Calligraphy”?",a:["Wang Xizhi","Li Bai","Lu Yu","Cao Cao"],c:0,e:"王羲之."},
    {q:"What does red face paint symbolise in Peking opera?",a:["Loyalty and courage","Treachery","Comedy","Old age"],c:0,e:"Example: Guan Yu."},
    {q:"Which city is the “porcelain capital”?",a:["Jingdezhen","Xi'an","Harbin","Lhasa"],c:0,e:"景德镇, Jiangxi."},
    {q:"What is 山水画?",a:["Landscape painting","Portrait","Flowers and birds","Calligraphy"],c:0,e:"Literally “mountain-water painting”."}
  ],
  sources:[["UNESCO ICH — China (calligraphy, paper-cutting, Peking opera, guqin)","https://ich.unesco.org/en/state/china-CN"],["Wikipedia — Chinese calligraphy","https://en.wikipedia.org/wiki/Chinese_calligraphy"],["Wikipedia — Peking opera","https://en.wikipedia.org/wiki/Peking_opera"],["Wikipedia — Jingdezhen porcelain","https://en.wikipedia.org/wiki/Jingdezhen_porcelain"]]
},
{
  id:"literature", zh:"文学", py:"wénxué", name:"Literature", icon:"文", color:"#3b4f7a", wiki:"Romance_of_the_Three_Kingdoms", widget:"poem",
  lead:"From ancient classics to a Nobel laureate, Chinese literature has one of the longest continuous traditions in the world.",
  sections:[
    { title:"The classics", cards:[
      { h:"Key texts", t:"{诗经|Shījīng|“Classic of Poetry”} — the oldest poetry collection (11th–6th c. BC); {论语|Lúnyǔ|the “Analects” of Confucius}; {道德经|Dàodéjīng|“Tao Te Ching”}; {孙子兵法|Sūnzǐ Bīngfǎ|“The Art of War” by Sunzi}." }
    ]},
    { title:"Tang and Song poetry", cards:[
      { h:"Great poets", t:"{李白|Lǐ Bái|Li Bai} (701–762), the “Immortal Poet”; {杜甫|Dù Fǔ|Du Fu} (712–770), the “Sage Poet”; {苏轼|Sū Shì|Su Shi} (1037–1101), also known as Su Dongpo — poet, calligrapher and even the namesake of the dish “Dongpo pork”." }
    ]},
    { title:"The Four Great Classical Novels 四大名著", cards:[
      { h:"Romance of the Three Kingdoms", t:"{三国演义|Sānguó Yǎnyì|“Romance of the Three Kingdoms”} — {罗贯中|Luó Guànzhōng|Luo Guanzhong}, 14th c. The wars of Wei, Shu and Wu." },
      { h:"Water Margin", t:"{水浒传|Shuǐhǔ Zhuàn|“Water Margin”} — attributed to {施耐庵|Shī Nài'ān|Shi Nai'an}. 108 noble outlaws." },
      { h:"Journey to the West", t:"{西游记|Xīyóu Jì|“Journey to the West”} — attributed to {吴承恩|Wú Chéng'ēn|Wu Cheng'en}, 16th c. The Monkey King {孙悟空|Sūn Wùkōng|Sun Wukong} escorts the monk {唐僧|Táng Sēng|Tang Seng} to India." },
      { h:"Dream of the Red Chamber", t:"{红楼梦|Hónglóu Mèng|“Dream of the Red Chamber”} — {曹雪芹|Cáo Xuěqín|Cao Xueqin}, 18th c. The summit of the Chinese novel." }
    ]},
    { title:"Modern times", cards:[
      { h:"Lu Xun", t:"{鲁迅|Lǔ Xùn|Lu Xun}, the founder of modern Chinese literature; {狂人日记|Kuángrén Rìjì|“A Madman's Diary”} (1918)." },
      { h:"Nobel Prize", t:"{莫言|Mò Yán|Mo Yan} received the Nobel Prize in Literature in 2012." }
    ]},
    { title:"Chengyu 成语", cards:[
      { h:"Four-character idioms", t:"{画蛇添足|huà shé tiān zú|“drawing legs on a snake” — overdoing it}, {对牛弹琴|duì niú tán qín|“playing the zither to a cow” — talking to the wrong audience}, {守株待兔|shǒu zhū dài tù|“waiting by a stump for a hare” — relying on luck}, {入乡随俗|rù xiāng suí sú|“when in Rome, do as the Romans do”}." }
    ]}
  ],
  vocab:[["文学","wénxué","literature"],["诗","shī","poem"],["诗人","shīrén","poet"],["小说","xiǎoshuō","novel, fiction"],["作家","zuòjiā","writer"],["书","shū","book"],["故事","gùshi","story"],["成语","chéngyǔ","chengyu idiom"],["月亮","yuèliang","moon"],["故乡","gùxiāng","hometown"]],
  quiz:[
    {q:"Who is the hero of “Journey to the West”?",a:["Sun Wukong","Guan Yu","Cao Cao","Qu Yuan"],c:0,e:"孙悟空 — the Monkey King."},
    {q:"Who wrote “Dream of the Red Chamber”?",a:["Cao Xueqin","Luo Guanzhong","Lu Xun","Mo Yan"],c:0,e:"曹雪芹."},
    {q:"Which Chinese writer won the Nobel Prize (2012)?",a:["Mo Yan","Lu Xun","Lao She","Ba Jin"],c:0,e:"莫言."},
    {q:"What does 画蛇添足 mean?",a:["Overdoing it","Being brave","Working hard","Waiting for luck"],c:0,e:"“Drawing legs on a snake”."},
    {q:"Who wrote “Quiet Night Thoughts”?",a:["Li Bai","Du Fu","Su Shi","Confucius"],c:0,e:"李白《静夜思》."}
  ],
  sources:[["Nobel Prize — Mo Yan, 2012","https://www.nobelprize.org/prizes/literature/2012/summary/"],["Wikipedia — Classic Chinese Novels","https://en.wikipedia.org/wiki/Classic_Chinese_Novels"],["Wikipedia — Li Bai","https://en.wikipedia.org/wiki/Li_Bai"],["Wikipedia — Chengyu","https://en.wikipedia.org/wiki/Chengyu"]]
},
{
  id:"inventions", zh:"四大发明", py:"sì dà fāmíng", name:"The Four Great Inventions", icon:"明", color:"#a0662d", wiki:"Diamond_Sutra",
  lead:"Paper, printing, gunpowder and the compass — the “Four Great Inventions” that changed the world.",
  sections:[
    { title:"The four inventions", cards:[
      { h:"Paper 造纸术", t:"{造纸术|zàozhǐshù|papermaking}: the official {蔡伦|Cài Lún|Cai Lun} improved the technique in 105 AD and presented it to the emperor. Archaeologists have found even older paper from the Western Han." },
      { h:"Printing 印刷术", t:"{雕版印刷|diāobǎn yìnshuā|woodblock printing} dates to the Tang; the Diamond Sutra of 868 is the oldest dated printed book. {活字印刷|huózì yìnshuā|movable-type printing} was invented by {毕昇|Bì Shēng|Bi Sheng} in the 1040s (as recorded by {沈括|Shěn Kuò|Shen Kuo})." },
      { h:"Gunpowder 火药", t:"{火药|huǒyào|“fire medicine”} was discovered by Taoist alchemists seeking an elixir of immortality. The earliest gunpowder formulas appear in the military treatise {武经总要|Wǔjīng Zǒngyào|“Wujing Zongyao”} (1044)." },
      { h:"Compass 指南针", t:"{指南针|zhǐnánzhēn|“south-pointing needle”}. Shen Kuo described the magnetic needle (1088); compasses were used for navigation by the early 12th century. Earlier still there was the {司南|sīnán|lodestone “south-pointing spoon”}." }
    ]},
    { title:"Other achievements", cards:[
      { h:"Silk", t:"{丝绸|sīchóu|silk} has been produced in China since the Neolithic; the secret was kept for a long time." },
      { h:"Seismoscope", t:"{张衡|Zhāng Héng|Zhang Heng} built a {地动仪|dìdòngyí|seismoscope} in 132 AD." },
      { h:"Abacus", t:"{算盘|suànpán|the Chinese abacus}; knowledge and practices of zhusuan are on the UNESCO list (2013)." }
    ]}
  ],
  vocab:[["发明","fāmíng","invention"],["纸","zhǐ","paper"],["印刷","yìnshuā","to print"],["火药","huǒyào","gunpowder"],["指南针","zhǐnánzhēn","compass"],["丝绸","sīchóu","silk"],["科学","kēxué","science"],["技术","jìshù","technology"],["东","dōng","east"],["南","nán","south"],["西","xī","west"],["北","běi","north"]],
  quiz:[
    {q:"Who improved papermaking in 105 AD?",a:["Cai Lun","Bi Sheng","Shen Kuo","Zhang Heng"],c:0,e:"蔡伦, Eastern Han."},
    {q:"Who invented movable type?",a:["Bi Sheng","Cai Lun","Lu Yu","Wang Xizhi"],c:0,e:"毕昇, 1040s."},
    {q:"What does 指南针 literally mean?",a:["South-pointing needle","North arrow","Sea star","Fire medicine"],c:0,e:"指 — point, 南 — south, 针 — needle."},
    {q:"Who discovered gunpowder?",a:["Taoist alchemists","Buddhist monks","European merchants","Mongol warriors"],c:0,e:"They were seeking an elixir of immortality."},
    {q:"The oldest dated printed book:",a:["Diamond Sutra, 868","The Gutenberg Bible","The Analects","The Classic of Tea"],c:0,e:"Held by the British Library."}
  ],
  sources:[["Wikipedia — Four Great Inventions","https://en.wikipedia.org/wiki/Four_Great_Inventions"],["British Library — The Diamond Sutra","https://www.bl.uk/collection-items/the-diamond-sutra"],["Britannica — Cai Lun","https://www.britannica.com/biography/Cai-Lun"],["Wikipedia — Shen Kuo","https://en.wikipedia.org/wiki/Shen_Kuo"]]
},
{
  id:"symbols", zh:"生肖与象征", py:"shēngxiào yǔ xiàngzhēng", name:"Zodiac and symbols", icon:"龙", color:"#b8232f", wiki:"Chinese_zodiac", widget:"zodiac",
  lead:"Dragon, phoenix, the colour red, “lucky” and “unlucky” numbers — symbolism runs through everyday life.",
  sections:[
    { title:"The Chinese zodiac 生肖", cards:[
      { h:"12 animals", t:"A 12-year cycle: {鼠|shǔ|Rat}, {牛|niú|Ox}, {虎|hǔ|Tiger}, {兔|tù|Rabbit}, {龙|lóng|Dragon}, {蛇|shé|Snake}, {马|mǎ|Horse}, {羊|yáng|Goat/Sheep}, {猴|hóu|Monkey}, {鸡|jī|Rooster}, {狗|gǒu|Dog}, {猪|zhū|Pig}. 2026 is the year of the Horse ({马年|mǎ nián|year of the Horse}). Find your animal below!" },
      { h:"Five elements", t:"{五行|wǔxíng|the five elements}: {木|mù|wood}, {火|huǒ|fire}, {土|tǔ|earth}, {金|jīn|metal}, {水|shuǐ|water}. Combined with the 12 animals they form a 60-year cycle." }
    ]},
    { title:"Mythical creatures", cards:[
      { h:"Dragon", t:"The {龙|lóng|dragon}, unlike its European cousin, is a benevolent force that commands water and rain; a symbol of the emperor." },
      { h:"Phoenix", t:"The {凤凰|fènghuáng|phoenix} symbolises harmony and the empress; “dragon and phoenix” together stand for a happy marriage." },
      { h:"Qilin", t:"The {麒麟|qílín|qilin} is an auspicious creature heralding a wise ruler." }
    ]},
    { title:"Colours", cards:[
      { h:"Red", t:"{红色|hóngsè|red} — happiness, celebration, luck; the colour of weddings." },
      { h:"Yellow", t:"{黄色|huángsè|yellow} — the emperor's colour; the roofs of the Forbidden City are covered with yellow tiles." },
      { h:"White", t:"{白色|báisè|white} — traditionally the colour of mourning." }
    ]},
    { title:"Numbers", cards:[
      { h:"8 — lucky", t:"{八|bā|eight} sounds like {发|fā|to prosper}. The Beijing Olympics opened on 08.08.2008 at 8:08 pm." },
      { h:"4 — unlucky", t:"{四|sì|four} sounds similar to {死|sǐ|death}; buildings often have no 4th floor." },
      { h:"6 and 9", t:"{六|liù|six} — “smooth, successful” ({六六大顺|liù liù dà shùn|“everything goes smoothly”}); {九|jiǔ|nine} sounds like {久|jiǔ|long-lasting}." }
    ]}
  ],
  vocab:[["生肖","shēngxiào","zodiac sign"],["属","shǔ","to be born in the year of"],["龙","lóng","dragon"],["凤凰","fènghuáng","phoenix"],["红色","hóngsè","red"],["黄色","huángsè","yellow"],["幸运","xìngyùn","luck"],["数字","shùzì","number"],["你属什么？","nǐ shǔ shénme?","What's your zodiac sign?"],["我属马","wǒ shǔ mǎ","I'm a Horse"]],
  quiz:[
    {q:"Which number is considered lucky?",a:["8","4","7","13"],c:0,e:"八 bā ~ 发 fā."},
    {q:"Why is the number 4 avoided?",a:["It sounds like “death”","It is odd","It is imperial","Because of the zodiac"],c:0,e:"四 sì ~ 死 sǐ."},
    {q:"Which colour traditionally means mourning?",a:["White","Red","Yellow","Green"],c:0,e:"Red is for celebration, white for mourning."},
    {q:"Which animal opens the 12-year cycle?",a:["Rat","Ox","Dragon","Horse"],c:0,e:"鼠 shǔ."},
    {q:"The animal of 2026:",a:["Horse","Snake","Dragon","Goat"],c:0,e:"2024 — Dragon, 2025 — Snake, 2026 — Horse."},
    {q:"How do you ask “What's your zodiac sign?”",a:["你属什么？","你叫什么？","你好吗？","你几岁？"],c:0,e:"nǐ shǔ shénme?"}
  ],
  sources:[["Wikipedia — Chinese zodiac","https://en.wikipedia.org/wiki/Chinese_zodiac"],["Wikipedia — Chinese dragon","https://en.wikipedia.org/wiki/Chinese_dragon"],["Wikipedia — Wuxing","https://en.wikipedia.org/wiki/Wuxing_(Chinese_philosophy)"],["Wikipedia — Numbers in Chinese culture","https://en.wikipedia.org/wiki/Numbers_in_Chinese_culture"]]
},
{
  id:"heritage", zh:"名胜古迹", py:"míngshèng gǔjì", name:"Landmarks and UNESCO heritage", icon:"城", color:"#7a3b2e", wiki:"Forbidden_City",
  lead:"As of 2025 China has 60 UNESCO World Heritage Sites — the second-highest number in the world after Italy.",
  sections:[
    { title:"The first sites (1987)", cards:[
      { h:"The Great Wall", t:"{长城|Chángchéng|“Long Wall”} — a system of fortifications built over more than 2,000 years; the best-known sections date from the Ming. A saying: {不到长城非好汉|bú dào Chángchéng fēi hǎohàn|“You're not a true hero until you've been to the Great Wall”}." },
      { h:"The Forbidden City", t:"{故宫|Gùgōng|the Forbidden City, “Old Palace”} (Beijing) was built in 1406–1420; home to 24 emperors of the Ming and Qing. Today it is the {故宫博物院|Gùgōng Bówùyuàn|Palace Museum}." },
      { h:"The Terracotta Army", t:"The {兵马俑|Bīngmǎyǒng|terracotta warriors and horses} are part of the mausoleum of Qin Shi Huang near Xi'an; discovered by farmers in 1974." },
      { h:"Mogao Caves", t:"The {莫高窟|Mògāo Kū|Mogao Caves} near {敦煌|Dūnhuáng|Dunhuang} hold Buddhist murals from the 4th to 14th centuries on the Silk Road." },
      { h:"Mount Tai", t:"{泰山|Tài Shān|Mount Tai} is the most revered of the {五岳|Wǔ Yuè|Five Great Mountains}; a mixed (cultural and natural) site." }
    ]},
    { title:"Other iconic sites", cards:[
      { h:"Beijing", t:"{天坛|Tiāntán|Temple of Heaven}, {颐和园|Yíhéyuán|Summer Palace}, {北京中轴线|Běijīng Zhōngzhóuxiàn|Beijing Central Axis} (2024)." },
      { h:"Gardens and towns", t:"{苏州古典园林|Sūzhōu gǔdiǎn yuánlín|Classical Gardens of Suzhou}, {平遥古城|Píngyáo gǔchéng|Pingyao}, {丽江古城|Lìjiāng gǔchéng|Lijiang}, {西湖|Xī Hú|West Lake}." },
      { h:"Nature", t:"{黄山|Huáng Shān|Huangshan}, {九寨沟|Jiǔzhàigōu|Jiuzhaigou}, {武陵源|Wǔlíngyuán|Wulingyuan (Zhangjiajie)}." },
      { h:"Engineering", t:"The {大运河|Dà Yùnhé|Grand Canal} — the longest artificial waterway of the ancient world (UNESCO 2014)." },
      { h:"The newest", t:"The {西夏陵|Xīxià Líng|Western Xia Imperial Tombs} in Ningxia — the 60th site (2025)." }
    ]}
  ],
  vocab:[["长城","Chángchéng","Great Wall"],["故宫","Gùgōng","Forbidden City"],["兵马俑","Bīngmǎyǒng","Terracotta Army"],["博物馆","bówùguǎn","museum"],["宫殿","gōngdiàn","palace"],["寺","sì","Buddhist temple"],["塔","tǎ","pagoda"],["山","shān","mountain"],["湖","hú","lake"],["旅游","lǚyóu","to travel"],["门票","ménpiào","entrance ticket"]],
  quiz:[
    {q:"How many UNESCO World Heritage Sites does China have (2025)?",a:["60","34","45","100"],c:0,e:"The 60th is the Western Xia Imperial Tombs."},
    {q:"When was the Terracotta Army discovered?",a:["1974","1949","1900","1987"],c:0,e:"By farmers digging a well."},
    {q:"Which city are the Mogao Caves near?",a:["Dunhuang","Lhasa","Chengdu","Nanjing"],c:0,e:"敦煌, Gansu province."},
    {q:"What does 故宫 mean?",a:["Old Palace (the Forbidden City)","Temple of Heaven","Summer Palace","Great Wall"],c:0,e:"Gùgōng."},
    {q:"Which is the most revered of the Five Great Mountains?",a:["Mount Tai","Huangshan","Everest","Wudang"],c:0,e:"泰山, Shandong."}
  ],
  sources:[["UNESCO World Heritage — China","https://whc.unesco.org/en/statesparties/cn"],["Gov.cn — Xixia Imperial Tombs inscribed (2025)","https://english.www.gov.cn/news/202507/12/content_WS6871aca5c6d0868f4e8f41d3.html"],["Wikipedia — Great Wall of China","https://en.wikipedia.org/wiki/Great_Wall_of_China"],["Wikipedia — Forbidden City","https://en.wikipedia.org/wiki/Forbidden_City"]]
},
{
  id:"etiquette", zh:"礼仪", py:"lǐyí", name:"Etiquette and communication", icon:"礼", color:"#2f5d7a", wiki:"Red_envelope",
  lead:"Understanding {面子|miànzi|“face”, reputation} and {关系|guānxi|connections} helps in study, business and friendship with Chinese people.",
  sections:[
    { title:"Key concepts", cards:[
      { h:"Face", t:"{面子|miànzi|“face”}: don't criticise someone in public — it makes them {丢面子|diū miànzi|“lose face”}. Praise means {给面子|gěi miànzi|“giving face”}." },
      { h:"Connections", t:"{关系|guānxi|a network of personal ties and mutual obligations} is an important part of social and business life." },
      { h:"Modesty", t:"A compliment is often answered with {哪里哪里|nǎli nǎli|“oh, not at all”} or {过奖了|guòjiǎng le|“you flatter me”}." }
    ]},
    { title:"Greetings and forms of address", cards:[
      { h:"Politely", t:"{您好|nín hǎo|Hello (respectful)}; {您|nín|you (polite)} is the polite form of {你|nǐ|you}." },
      { h:"Forms of address", t:"Surname + title: {王老师|Wáng lǎoshī|Teacher Wang}, {李经理|Lǐ jīnglǐ|Manager Li}. Chinese surnames come first." },
      { h:"Everyday greeting", t:"{吃了吗？|Chī le ma?|“Have you eaten?”} — a friendly formula like “how are you”." }
    ]},
    { title:"Gifts", cards:[
      { h:"With both hands", t:"Gifts, {名片|míngpiàn|business cards} and documents are given and received with both hands." },
      { h:"Taboos", t:"Clocks are not given as gifts: {送钟|sòng zhōng|giving a clock} sounds like {送终|sòngzhōng|attending someone's death}. Pears are not shared: {分梨|fēn lí|splitting a pear} ~ {分离|fēnlí|separation}." },
      { h:"Red envelopes", t:"The amount in a {红包|hóngbāo|red envelope} should be even, ideally with 6 or 8, avoiding 4." }
    ]}
  ],
  vocab:[["您好","nín hǎo","hello (polite)"],["谢谢","xièxie","thank you"],["不客气","bú kèqi","you're welcome"],["对不起","duìbuqǐ","sorry"],["没关系","méi guānxi","no problem"],["请","qǐng","please"],["再见","zàijiàn","goodbye"],["面子","miànzi","“face”, reputation"],["关系","guānxi","connections"],["礼物","lǐwù","gift"],["朋友","péngyou","friend"]],
  quiz:[
    {q:"Why are clocks not given as gifts?",a:["送钟 sounds like “attending someone's death”","Too expensive","A clock symbolises laziness","Because of the colour"],c:0,e:"送钟 sòng zhōng ~ 送终 sòngzhōng."},
    {q:"How do you say “you” politely?",a:["您 nín","你 nǐ","他 tā","我 wǒ"],c:0,e:"您好 nín hǎo."},
    {q:"What does 丢面子 mean?",a:["To lose face","To receive a gift","To make a friend","To say thanks"],c:0,e:"Public humiliation."},
    {q:"How should you hand over a business card?",a:["With both hands","With the left hand","Toss it on the table","Through a third person"],c:0,e:"A sign of respect."},
    {q:"Reply to “谢谢”:",a:["不客气","再见","你好","对不起"],c:0,e:"bú kèqi — you're welcome."}
  ],
  sources:[["Wikipedia — Face (sociological concept): Chinese “mianzi”","https://en.wikipedia.org/wiki/Face_(sociological_concept)"],["Wikipedia — Guanxi","https://en.wikipedia.org/wiki/Guanxi"],["Wikipedia — Red envelope","https://en.wikipedia.org/wiki/Red_envelope"],["Wikipedia — Numbers in Chinese culture","https://en.wikipedia.org/wiki/Numbers_in_Chinese_culture"]]
},
{
  id:"martial", zh:"武术与养生", py:"wǔshù yǔ yǎngshēng", name:"Martial arts and traditional medicine", icon:"武", color:"#3d3d3d", wiki:"Shaolin_Monastery",
  lead:"Martial arts and traditional medicine are part of the cultural heritage, closely tied to philosophy.",
  sections:[
    { title:"Wushu 武术", cards:[
      { h:"Wushu and kung fu", t:"{武术|wǔshù|martial arts}; the Western word kung fu comes from {功夫|gōngfu|skill achieved through hard work}." },
      { h:"Shaolin and Wudang", t:"{少林|Shàolín|Shaolin} (Henan) — “external” styles; {武当|Wǔdāng|Wudang} (Hubei) — “internal” styles linked to Taoism." },
      { h:"Taijiquan", t:"{太极拳|tàijíquán|tai chi} — smooth movements based on the idea of yin and yang; UNESCO — 2020." },
      { h:"Bruce Lee", t:"{李小龙|Lǐ Xiǎolóng|Bruce Lee, “Little Dragon”} popularised Chinese martial arts in world cinema." }
    ]},
    { title:"Traditional medicine 中医", cards:[
      { h:"A cultural phenomenon", t:"{中医|Zhōngyī|traditional Chinese medicine} is based on ideas of {气|qì|qi, vital energy}, yin–yang and the five elements. Scientific evidence of effectiveness is lacking for most of its practices." },
      { h:"Acupuncture", t:"{针灸|zhēnjiǔ|acupuncture and moxibustion} was inscribed by UNESCO as intangible heritage (2010) — as a cultural practice." },
      { h:"Yangsheng", t:"{养生|yǎngshēng|“nourishing life”} — an everyday health culture: warm water, morning exercises in parks, tea." }
    ]}
  ],
  vocab:[["武术","wǔshù","martial arts"],["功夫","gōngfu","kung fu, skill"],["太极拳","tàijíquán","tai chi"],["练习","liànxí","to practise"],["身体","shēntǐ","body, health"],["健康","jiànkāng","health; healthy"],["中医","Zhōngyī","traditional medicine"],["气","qì","qi, energy"],["运动","yùndòng","sport, exercise"]],
  quiz:[
    {q:"What does 功夫 literally mean?",a:["Skill achieved through hard work","A fighting fist","A dragon","A monastery"],c:0,e:"gōngfu."},
    {q:"Where is the Shaolin Monastery?",a:["Henan","Tibet","Shandong","Guangdong"],c:0,e:"On Mount Song."},
    {q:"When was taijiquan inscribed by UNESCO?",a:["2020","2001","1987","2024"],c:0,e:"Intangible heritage."},
    {q:"Bruce Lee in Chinese:",a:["李小龙","李白","孙悟空","孔子"],c:0,e:"Lǐ Xiǎolóng."}
  ],
  sources:[["UNESCO ICH — Taijiquan (2020), Acupuncture (2010)","https://ich.unesco.org/en/state/china-CN"],["Wikipedia — Chinese martial arts","https://en.wikipedia.org/wiki/Chinese_martial_arts"],["Wikipedia — Shaolin Monastery","https://en.wikipedia.org/wiki/Shaolin_Monastery"],["Britannica — Traditional Chinese medicine","https://www.britannica.com/science/traditional-Chinese-medicine"]]
}
);

window.POEM = {
  title:["静夜思","Jìng yè sī","Quiet Night Thoughts"], author:["李白","Lǐ Bái","Li Bai"],
  lines:[
    ["床前明月光","chuáng qián míng yuè guāng","Before my bed, the bright moonlight —"],
    ["疑是地上霜","yí shì dì shàng shuāng","I take it for frost upon the ground."],
    ["举头望明月","jǔ tóu wàng míng yuè","I raise my head and gaze at the bright moon,"],
    ["低头思故乡","dī tóu sī gù xiāng","I lower my head and think of home."]
  ]
};
window.ZODIAC = [
  ["鼠","shǔ","Rat","🐀","Rat"],["牛","niú","Ox","🐂","Ox"],["虎","hǔ","Tiger","🐅","Tiger"],["兔","tù","Rabbit","🐇","Rabbit"],
  ["龙","lóng","Dragon","🐉","Dragon"],["蛇","shé","Snake","🐍","Snake"],["马","mǎ","Horse","🐎","Horse"],["羊","yáng","Goat","🐐","Goat"],
  ["猴","hóu","Monkey","🐒","Monkey"],["鸡","jī","Rooster","🐓","Rooster"],["狗","gǒu","Dog","🐕","Dog"],["猪","zhū","Pig","🐖","Pig"]
];
window.ELEMENTS = [["金","jīn","Metal"],["水","shuǐ","Water"],["木","mù","Wood"],["火","huǒ","Fire"],["土","tǔ","Earth"]];
window.TEAS = [
  ["绿茶","lǜchá","Green","0%","#8db255","Unoxidised. Longjing, Biluochun."],
  ["白茶","báichá","White","5–10%","#e6dcc0","Barely oxidised, only withered. Bai Hao Yin Zhen."],
  ["黄茶","huángchá","Yellow","10–20%","#d9c25a","“Smothered” under cloth. Junshan Yinzhen."],
  ["青茶","qīngchá","Oolong","20–80%","#4d8b78","Partially oxidised. Tieguanyin, Da Hong Pao."],
  ["红茶","hóngchá","“Red” (black)","~100%","#9a3324","Fully oxidised. Keemun."],
  ["黑茶","hēichá","Dark","post-fermented","#3a2a20","Microbial fermentation, aged for years. Pu'er."]
];
window.CUISINES = [
  ["鲁菜","Lǔcài","Shandong","370000","The oldest; the basis of Beijing court cuisine. Soups, seafood."],
  ["川菜","Chuāncài","Sichuan","510000","麻辣 — numbing and spicy. Mapo tofu, Kung Pao chicken."],
  ["粤菜","Yuècài","Cantonese","440000","Freshness, light sauces, dim sum, roast meats 烧腊."],
  ["苏菜","Sūcài","Jiangsu","320000","Fine knife work, slightly sweet flavours, “squirrel” fish."],
  ["闽菜","Mǐncài","Fujian","350000","Soups and broths, seafood. “Buddha Jumps Over the Wall”."],
  ["浙菜","Zhècài","Zhejiang","330000","Fresh and mild. Dongpo pork, shrimp with Longjing tea."],
  ["湘菜","Xiāngcài","Hunan","430000","Very spicy, smoked, sour. Fish head with chillies."],
  ["徽菜","Huīcài","Anhui","340000","Mountain herbs, braising. “Stinky” mandarin fish."]
];
