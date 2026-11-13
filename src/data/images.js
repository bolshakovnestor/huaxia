// Ієрогліфи → назва статті англійської Вікіпедії (для фото).
// Якщо назви немає, для пам'яток провінцій пробуємо статтю китайської Вікіпедії з такою ж назвою.
window.WIKI = {
  // Пам'ятки та місця
  "故宫":"Forbidden_City","天坛":"Temple_of_Heaven","颐和园":"Summer_Palace","八达岭长城":"Badaling","长城":"Great_Wall_of_China",
  "天津之眼":"Tianjin_Eye","外滩":"The_Bund","东方明珠":"Oriental_Pearl_Tower","豫园":"Yu_Garden",
  "大足石刻":"Dazu_Rock_Carvings","长江三峡":"Three_Gorges","山海关":"Shanhai_Pass","承德避暑山庄":"Chengde_Mountain_Resort",
  "赵州桥":"Anji_Bridge","平遥古城":"Pingyao","云冈石窟":"Yungang_Grottoes","五台山":"Mount_Wutai","呼伦贝尔草原":"Hulunbuir",
  "成吉思汗陵":"Mausoleum_of_Genghis_Khan","沈阳故宫":"Mukden_Palace","大连":"Dalian","长白山天池":"Heaven_Lake",
  "雾凇":"Rime_ice","哈尔滨冰雪大世界":"Harbin_International_Ice_and_Snow_Sculpture_Festival","圣索菲亚教堂":"Saint_Sophia_Cathedral,_Harbin",
  "苏州园林":"Classical_Gardens_of_Suzhou","苏州古典园林":"Classical_Gardens_of_Suzhou","拙政园":"Humble_Administrator's_Garden",
  "中山陵":"Sun_Yat-sen_Mausoleum","西湖":"West_Lake","乌镇":"Wuzhen","良渚古城":"Liangzhu_culture",
  "黄山":"Huangshan","宏村":"Hongcun","西递":"Xidi","福建土楼":"Fujian_tulou","武夷山":"Wuyi_Mountains","鼓浪屿":"Gulangyu",
  "景德镇":"Jingdezhen_porcelain","庐山":"Mount_Lu","滕王阁":"Pavilion_of_Prince_Teng","泰山":"Mount_Tai","曲阜三孔":"Temple_of_Confucius,_Qufu",
  "青岛":"Qingdao","少林寺":"Shaolin_Monastery","少林":"Shaolin_Monastery","龙门石窟":"Longmen_Grottoes","殷墟":"Yinxu",
  "三峡大坝":"Three_Gorges_Dam","黄鹤楼":"Yellow_Crane_Tower","武当山":"Wudang_Mountains","张家界":"Zhangjiajie_National_Forest_Park",
  "凤凰古城":"Fenghuang_County","岳麓书院":"Yuelu_Academy","开平碉楼":"Kaiping_Diaolou","深圳":"Shenzhen","广州塔":"Canton_Tower",
  "漓江":"Li_River","阳朔":"Yangshuo_County","龙脊梯田":"Longji_Rice_Terraces","三亚":"Sanya","九寨沟":"Jiuzhaigou",
  "乐山大佛":"Leshan_Giant_Buddha","都江堰":"Dujiangyan_irrigation_system","三星堆":"Sanxingdui","黄果树瀑布":"Huangguoshu_Waterfall",
  "梵净山":"Mount_Fanjing","丽江古城":"Old_Town_of_Lijiang","大理":"Dali_City","石林":"Stone_Forest","红河哈尼梯田":"Honghe_Hani_Rice_Terraces",
  "布达拉宫":"Potala_Palace","大昭寺":"Jokhang","珠穆朗玛峰":"Mount_Everest","兵马俑":"Terracotta_Army","大雁塔":"Giant_Wild_Goose_Pagoda",
  "西安城墙":"Fortifications_of_Xi'an","华山":"Mount_Hua","莫高窟":"Mogao_Caves","嘉峪关":"Jiayu_Pass","张掖丹霞":"Zhangye_National_Geopark",
  "月牙泉":"Crescent_Lake_(Dunhuang)","青海湖":"Qinghai_Lake","塔尔寺":"Kumbum_Monastery","可可西里":"Hoh_Xil","西夏陵":"Western_Xia_mausoleums",
  "天山":"Tian_Shan","喀什":"Kashgar","吐鲁番":"Turpan","塔克拉玛干沙漠":"Taklamakan_Desert","维多利亚港":"Hong_Kong",
  "太平山":"Victoria_Peak","天坛大佛":"Tian_Tan_Buddha","大三巴牌坊":"Ruins_of_Saint_Paul's","澳门历史城区":"Historic_Centre_of_Macau",
  "台北故宫博物院":"National_Palace_Museum","日月潭":"Sun_Moon_Lake","阿里山":"Alishan_National_Scenic_Area","大运河":"Grand_Canal_(China)",
  "长江":"Yangtze","丝绸之路":"Silk_Road",
  // Їжа і напої
  "北京烤鸭":"Peking_duck","炸酱面":"Zhajiangmian","狗不理包子":"Goubuli","煎饼果子":"Jianbing","煎饼":"Jianbing","小笼包":"Xiaolongbao",
  "生煎包":"Shengjian_mantou","重庆火锅":"Hot_pot","火锅":"Hot_pot","刀削面":"Daoxiao_noodles","奶茶":"Suutei_tsai","冷面":"Naengmyeon",
  "盐水鸭":"Nanjing_salted_duck","东坡肉":"Dongpo_pork","佛跳墙":"Buddha_Jumps_Over_the_Wall","鲁菜":"Shandong_cuisine",
  "热干面":"Hot_dry_noodles","湘菜":"Hunan_cuisine","早茶":"Yum_cha","虾饺":"Har_gow","叉烧":"Char_siu","螺蛳粉":"Luosifen",
  "文昌鸡":"Wenchang_chicken","椰子":"Coconut","麻婆豆腐":"Mapo_tofu","宫保鸡丁":"Kung_Pao_chicken",
  "过桥米线":"Crossing-the-bridge_noodles","普洱茶":"Pu'er_tea","普洱":"Pu'er_tea","酥油茶":"Butter_tea","糌粑":"Tsampa",
  "肉夹馍":"Roujiamo","羊肉泡馍":"Paomo","兰州牛肉面":"Lanzhou_beef_noodle_soup","枸杞":"Goji","大盘鸡":"Dapanji","烤羊肉串":"Chuan_(food)",
  "菠萝包":"Pineapple_bun","港式奶茶":"Hong_Kong-style_milk_tea","葡式蛋挞":"Pastel_de_nata","珍珠奶茶":"Bubble_tea","夜市":"Shilin_Night_Market",
  "麻辣":"Sichuan_pepper","筷子":"Chopsticks","西湖龙井":"Longjing_tea","铁观音":"Tieguanyin","功夫茶":"Gongfu_tea",
  "绿茶":"Green_tea","陆羽":"The_Classic_of_Tea",
  // Культура
  "五星红旗":"Flag_of_China","国徽":"National_Emblem_of_China","甲骨文":"Oracle_bone_script","唐":"Tang_dynasty",
  "辛亥革命":"Xinhai_Revolution","科举":"Imperial_examination","道家":"Taoism","佛教":"Chinese_Buddhism",
  "禅宗":"Chan_Buddhism","春节":"Chinese_New_Year","元宵节":"Lantern_Festival","清明节":"Qingming_Festival",
  "端午节":"Dragon_Boat_Festival","七夕":"Qixi_Festival","中秋节":"Mid-Autumn_Festival","重阳节":"Double_Ninth_Festival","红包":"Red_envelope",
  "文房四宝":"Four_Treasures_of_the_Study","篆书":"Seal_script","王羲之":"Lantingji_Xu","山水画":"Shan_shui","工笔":"Gongbi",
  "京剧":"Peking_opera","剪纸":"Chinese_paper_cutting","中国结":"Chinese_knotting",
  "古琴":"Guqin","诗经":"Classic_of_Poetry","三国演义":"Romance_of_the_Three_Kingdoms","水浒传":"Water_Margin",
  "西游记":"Journey_to_the_West","红楼梦":"Dream_of_the_Red_Chamber","造纸术":"Papermaking","雕版印刷":"Diamond_Sutra","火药":"Gunpowder",
  "丝绸":"Silk","算盘":"Suanpan","鼠":"Chinese_zodiac","龙":"Chinese_dragon","凤凰":"Fenghuang",
  "麒麟":"Qilin","鲁菜_":""
};
// Галерея на головній: [ієрогліфи, піньїнь, назва, id провінції]
window.GALLERY = [
  ["长城","Chángchéng","Велика стіна","110000"],["故宫","Gùgōng","Заборонене місто","110000"],["兵马俑","Bīngmǎyǒng","Теракотова армія","610000"],
  ["布达拉宫","Bùdálā Gōng","Палац Потала","540000"],["漓江","Lí Jiāng","Річка Лі","450000"],["西湖","Xī Hú","Західне озеро","330000"],
  ["外滩","Wàitān","Набережна Вайтань","310000"],["张家界","Zhāngjiājiè","Чжанцзяцзє","430000"],["莫高窟","Mògāo Kū","Печери Могао","620000"],
  ["九寨沟","Jiǔzhàigōu","Цзючжайгоу","510000"],["福建土楼","Fújiàn tǔlóu","Тулоу Фуцзяню","350000"],["维多利亚港","Wéiduōlìyà Gǎng","Бухта Вікторія","810000"]
];
