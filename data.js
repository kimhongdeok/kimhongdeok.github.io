/* =====================================================================
   data.js — 모든 내용은 이 파일에서만 수정합니다. index.html은 건드릴 필요 없음.
   - 새 항목은 각 배열의 "맨 위"에 추가하면 됩니다 (최신순). 번호/통계/CV PDF는 자동 갱신.
   - 저자 표기: 본인 이름("{ME}")은 자동으로 굵게 표시됩니다.
       이름 뒤에  †  = 제1저자,   *  = 교신저자(논문) / 발표자(학회)
       예: "Hongdeok Kim†"  "Hongdeok Kim*"  "김홍덕*"
   - 문자열 안에 큰따옴표(")가 필요하면 \" 로 적습니다.
   ===================================================================== */

/* ---------- 사이트 설정 (이직/소속 변경 시 여기만 바꾸면 됨) ---------- */
const SITE = {
  themeColor: "#0B5C8E",        // 라이트 모드 강조색 (제목, 번호, 링크, CV 제목)
  themeColorDark: "#3FA0D8",    // 다크 모드 강조색
  description: "Research Professor at Sungkyunkwan University working on multiscale computational mechanics — molecular dynamics, structure-driven polymer design, and nanocomposite interface mechanics.",
  keywords: "multiscale mechanics, molecular dynamics, polymer, nanocomposite, interface, coarse-grained, SKKU",
  // 상단 메뉴. 순서/이름 변경 가능. 내용이 비어 있는 탭(예: Projects가 0건)은 자동으로 숨겨집니다.
  nav: [
    {id:"cv",           label:"CV"},
    {id:"research",     label:"Research Field"},
    {id:"publications", label:"Publications"},
    {id:"conferences",  label:"Conferences"},
    {id:"projects",     label:"Projects"},
  ],
};

const PROFILE = {
  name: "Hongdeok Kim",
  nameKo: "김홍덕",
  title: "Research Professor",                                            // 직함
  affiliation: "School of Mechanical Engineering, Sungkyunkwan University", // 소속 (CV PDF 머리글)
  tagline: "Multiscale Computational Mechanics",                           // 웹 CV의 Professional Title 뒤에 붙는 문구
  email: "khd12323@skku.edu",
  phone: "",                                                               // 비워두면 표시 안 함
  location: "Multiscale Structural Mechanics Lab., School of Mechanical Engineering, Sungkyunkwan University, Suwon 16419, Republic of Korea",
  // 외부 프로필 링크. 필요한 것만 남기세요 (ORCID, ResearchGate, GitHub, LinkedIn 등 자유롭게 추가).
  links: [
    {label:"Google Scholar", url:"https://scholar.google.co.kr/citations?user=mWeYD8kAAAAJ&hl=ko&oi=ao"},
    // {label:"ORCID", url:"https://orcid.org/0000-0000-0000-0000"},
    // {label:"ResearchGate", url:"https://www.researchgate.net/profile/..."},
  ],
};

const ME = "Hongdeok Kim";      // 영문 논문/학회에서 굵게 표시할 이름
const ME_KO = "김홍덕";          // 국내 학회에서 굵게 표시할 이름

/* ---------- Experience / Education ---------- */
const EXPERIENCE = [
 {period:"2026.09 – Present", title:"Research Professor", org:"School of Mechanical Engineering, Sungkyunkwan University.", sub:"BrainKorea21: 인간 중심 융합기계솔루션 미래인재양성 교육연구단"},
 {period:"2025.03 – 2026.08", title:"Post-Doc.", org:"School of Mechanical Engineering, Sungkyunkwan University.", sub:"Supported by SKKU President Fellowship Program (2025) | Supervisor: Prof. Joonmyung Choi"},
];

const EDUCATION = [
 {period:"2020.03 – 2025.02", title:"Ph.D.", org:"Department of Mechanical Design Engineering, Hanyang University.",
  sub:"Combined M.S. and Ph.D. program | Supervisor: Prof. Joonmyung Choi",
  thesis:"Subcontinuum characterization of polymers using atomistic simulations and its applications to thermal–mechanical modeling"},
 {period:"2014.03 – 2020.02", title:"B.S.", org:"Department of Mechanical Engineering, Hanyang University ERICA.", sub:"Graduated Summa Cum Laude, Early graduation"},
];

/* ---------- Honors and Awards ---------- */
const AWARDS = [
 {d:"2024.06", t:"ERICA 학술상 – 대학원생 국제 논문 우수 부문, 한양대학교"},
 {d:"2023.05", t:"ERICA 학술상 – 대학원생 국제 논문 우수 부문, 한양대학교"},
 {d:"2020.12", t:"동상, 제5회 KSME-SEMES 오픈 이노베이션 챌린지, 대한기계학회"},
 {d:"2019.09", t:"우수상, 에너지기술혁신 아이디어 경진대회, 한국에너지기술평가원"},
];

/* ---------- CV 추가 섹션 (선택) ----------
   Teaching, Professional Service, Reviewer 활동 등 필요할 때 추가.
   rows: [{d:"기간/연도", t:"내용"}] 형식. 비어 있으면 표시되지 않음. */
const CV_EXTRA = [
 // {title:"Teaching", rows:[{d:"2027 Spring", t:"Solid Mechanics (undergraduate), Sungkyunkwan University"}]},
 // {title:"Professional Service", rows:[{d:"2025 –", t:"Reviewer: Macromolecules, Composites Part A, Int. J. Mech. Sci."}]},
];

/* ---------- Research Field ----------
   Research Field 탭 목록 + 세부 페이지가 모두 여기서 생성됩니다. 분야 추가/삭제/순서 변경 자유.
     id      : 주소에 쓰이는 영문 식별자 (예: #research/multiscale)
     title   : 대제목        lead : 세부 페이지 맨 위 소개 문단
     bullets : Research Field 목록에 보이는 요약 3줄
     topics  : 세부 페이지의 소주제들. 각 소주제 = {h:소제목, items:[설명 문장들], fig:그림, caption:그림 설명(선택)}
   그림 넣는 법:
     1) 저장소에 img 폴더를 만들고 그림 파일(png/jpg/svg)을 넣는다
     2) fig:"img/파일명.png"  (그림 2개 이상이면 fig:["img/a.png","img/b.png"])
     3) fig:"" 이면 점선 자리표시가 보임 */
const RESEARCH = [
 {id:"multiscale", title:"Multiscale Computational Mechanics",
  lead:"Developing scale-bridging methodologies that connect atomistic molecular dynamics to continuum-level frameworks for predicting the mechanical behavior of polymers.",
  bullets:["Subcontinuum interpretation of load transfer in cross-linked and semicrystalline polymers",
           "Coarse-grained molecular dynamics for creep, fatigue and thermal transport",
           "Scale-bridging design models from molecular structure to continuum properties"],
  topics:[
   {h:"Subcontinuum Characterization of Polymers", items:["Molecular-scale load transfer analysis that resolves how stress is carried by individual chain segments, cross-links, and microphases within a continuum element.","Applied to cross-linked epoxy networks and polyurethane to explain macroscopic stiffness and toughness from the network-level load paths."], fig:""},
   {h:"Coarse-Grained Molecular Dynamics", items:["Coarse-grained models of semicrystalline polymers to reach the time and length scales of creep and fatigue.","Crystalline-structure-dependent creep resistance and lamellar-morphology-based prediction of thermal conductivity."], fig:""},
   {h:"Theoretical Multiscale Design Models", items:["Analytical frameworks that take molecular topology or morphology as input and return continuum properties such as toughness and thermal conductivity.","Multiscale modeling of laser-induced coalescence in conducting polymers and thermal transport in nanocomposites, in collaboration with experimental groups."], fig:""},
  ]},
 {id:"polymers", title:"Structure-driven Design of Advanced Polymers",
  lead:"Linking molecular topology and microphase morphology to macroscopic toughness, fatigue resistance, and creep behavior.",
  bullets:["Topology-based toughness design of network polymers and epoxy thermosets",
           "Microphase-dependent mechanics of polyurethane and self-healing elastomers",
           "Shape memory and lamellar-morphology effects in semicrystalline polymers"],
  topics:[
   {h:"Topology-Based Toughness Design of Network Polymers", items:["A theoretical multiscale approach that relates network topology to fracture energy, used to design monomer–dimer additives that toughen one-component epoxy thermosets.","Debondable optically clear adhesives and self-healing thermoplastic polyurethanes designed with experimental collaborators."], fig:""},
   {h:"Microphase-Dependent Mechanics of Polyurethane", items:["Load transfer capability of hard and soft microphases in polyurethane and the resulting reinforcement–weakening crossover when nanoparticles are introduced."], fig:""},
   {h:"Shape Memory and Semicrystalline Polymers", items:["Mechanical origin of shape memory performance in cross-linked epoxy networks during programming and recovery.","Crystalline structure effects on creep resistance and thermal conductivity in semicrystalline polymers."], fig:""},
  ]},
 {id:"interfaces", title:"Mechanics of Nanocomposite Interfaces",
  lead:"Investigating interfacial load transfer, adhesion, and failure mechanisms in CNT-, graphene-, and nanoparticle-reinforced composites.",
  bullets:["Reinforcement–weakening crossover and energy dissipation at filler interfaces",
           "Liquid crystal polymer / MWCNT interface mechanics under phase transition",
           "Ion transport and polarization at heterogeneous interfaces in composite electrolytes"],
  topics:[
   {h:"Liquid Crystal Polymer / Carbon Nanotube Interfaces", items:["Interface mechanics of LCP/MWCNT nanocomposites at high filler concentrations and interfacial stability during the nematic-to-isotropic phase transition.","Photo- and thermally-stimulated phase transition of azobenzene-functionalized LCP/CNT interfaces."], fig:""},
   {h:"Graphene and Nanoparticle Reinforcement", items:["Chirality-dependent interfacial energy dissipation and vibration damping in graphene-reinforced cross-linked polymers.","Crystalline polyethylene interfaces formed by projection of CNT structures; grafted Au nanoparticles in liquid crystalline elastomers."], fig:""},
   {h:"Interfaces in Functional and Energy Materials", items:["Ionic conductivity enhancement by heterogeneous interfaces in composite hydrogel electrolytes.","Spatially dependent polarization of PVDF nanocomposites under combined electric field and interfacial interaction."], fig:""},
  ]},
];

/* ---------- Journal Articles (SCIE) ----------
   t: 제목  a: 저자 배열  j: 저널명(전체)  y: 연도  v: 권(호), 페이지  doi: DOI
   n: 비고 (Front Cover, Invited article 등)  cover: 표지 링크 (선택)
   coverImg: 표지 이미지 파일 (예: "img/cover_polymj.jpg") → Publications 상단 커버 갤러리에 자동 표시.
             이미지 파일을 저장소에 올린 뒤 이 항목만 추가하면 됨. 썸네일을 누르면 해당 논문으로 이동.
   coverLabel: 갤러리 아래 표시 문구 (선택). 없으면 n 에서 "Front Cover" 등 Cover 부분을 자동 사용. */
const PUBS = [
 {t:"Ballistic-like thermal transport between fillers in highly conductive stretchable nanocomposites",
  a:["C. Muhammed Ajmal","Seongsu Cheon","Yeongbin Kim","Hongdeok Kim","Joonmyung Choi","Seunghyun Baik"],
  j:"Advanced Functional Materials", y:"2026", v:"e77937", doi:"10.1002/adfm.77937"},
 {t:"Structure-inhibition relationship of vapor-deposited alkylsilane monolayers in area-selective atomic layer deposition",
  a:["Eunji Sim","Jungsub Lee","Somang Koo","Kyuwook Ihm","Hongdeok Kim","Joonmyung Choi","Suk Gyu Hahm","Myongjong Kwon","Byungha Park"],
  j:"Langmuir", y:"2026", v:"42(30), 22128–22136", doi:"10.1021/acs.langmuir.6c02347", n:"Co-worked with Samsung Electronics"},
 {t:"PET-derived reactive monomer-dimer additives for efficient toughening of one-component epoxy thermosets",
  a:["Gyuri Kim","Hongdeok Kim†","Yungyeong Lee","Joonmyung Choi","Min Sang Kwon"],
  j:"Chemical Engineering Journal", y:"2026", v:"543, 178661", doi:"10.1016/j.cej.2026.178661"},
 {t:"In silico characterization of the cross-sectional turbulence of a PAN-derived carbon fiber and its effects on structural–mechanical properties",
  a:["Yuri Jeon","Hongdeok Kim*","Joonmyung Choi"],
  j:"Chemical Engineering Journal", y:"2026", v:"541, 177773", doi:"10.1016/j.cej.2026.177773"},
 {t:"Thermal conductivity reduction in heterostructure multi-layer composites by phonon density of state mismatch",
  a:["Gwangmin Go","Jaehun Yang","Daewoo Suh","Yeongbin Kim","Hongdeok Kim","Mohamad Alayli","Sunghwan Hong","Jungsoo Lim","Joonmyung Choi","Seunghyun Baik"],
  j:"ACS Applied Materials & Interfaces", y:"2026", v:"18(17), 24673–24684", doi:"10.1021/acsami.6c02949"},
 {t:"Highly tough, notch-insensitive, and fast self-healing thermoplastic polyurethane elastomers by tailored soft segment design",
  a:["Changhoon Yu","Hongdeok Kim†","Jinho Choi","Sunwu Song","Min Sang Kwon","Joonmyung Choi"],
  j:"Angewandte Chemie International Edition", y:"2026", v:"65(13), e8983737", doi:"10.1002/anie.8983737"},
 {t:"A theoretical multiscale approach for topology-based toughness design of network polymers",
  a:["Hongdeok Kim†","Gyuri Kim","Min Sang Kwon","Joonmyung Choi"],
  j:"Chemical Engineering Journal", y:"2026", v:"530, 173719", doi:"10.1016/j.cej.2026.173719"},
 {t:"Microphase-dependent reinforcement–weakening crossover by nanoparticles in polyurethane",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"International Journal of Mechanical Sciences", y:"2026", v:"309, 111023", doi:"10.1016/j.ijmecsci.2025.111023"},
 {t:"Chirality-dependent interfacial energy dissipation in graphene-reinforced polymer nanocomposites: A molecular dynamics study",
  a:["Sihyun Kim","Hongdeok Kim†","Junho Oh","Joonmyung Choi"],
  j:"Surfaces and Interfaces", y:"2025", v:"75, 107763", doi:"10.1016/j.surfin.2025.107763"},
 {t:"Spatially dependent polarization of PVDF nanocomposites under the combined influence of an electric field and interfacial interaction",
  a:["Yeongbin Kim","Hongdeok Kim†","Joonmyung Choi"],
  j:"Composites Part A: Applied Science and Manufacturing", y:"2025", v:"199, 109224", doi:"10.1016/j.compositesa.2025.109224"},
 {t:"Molecular mechanism of ionic conductivity enhancement by heterogeneous interface in composite hydrogel electrolytes",
  a:["Hongdeok Kim†","Sihyun Kim","Junho Oh","Joonmyung Choi"],
  j:"Batteries & Supercaps", y:"2025", v:"8(12), e202500394", doi:"10.1002/batt.202500394", n:"Invited article"},
 {t:"A computational method for characterizing molecular-scale load transfer in polymer systems containing structural heterogeneity",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Polymer Journal", y:"2025", v:"57, 385–394", doi:"10.1038/s41428-024-00997-4", coverImg:"img/cover_polymj_2025.png", n:"Invited focus review article · Front Cover", cover:"https://www.nature.com/pj/volumes/57/issues/4"},
 {t:"Mechanical role of graphene nanofiller on vibration damping properties of highly cross-linked polymers",
  a:["Sihyun Kim","Hongdeok Kim†","Joonmyung Choi"],
  j:"Composites Part A: Applied Science and Manufacturing", y:"2025", v:"191, 108720", doi:"10.1016/j.compositesa.2025.108720"},
 {t:"Molecular-scale investigation of the microphase-dependent load transfer capability of polyurethane",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Macromolecules", y:"2024", v:"57, 10745–10753", doi:"10.1021/acs.macromol.4c01773"},
 {t:"Azobenzene-functionalized semicrystalline liquid crystal elastomer springs for underwater soft robotic actuators",
  a:["Wonbin Seo","Carter S. Haines","Hongdeok Kim","Chae-Lin Park","Shi Hyeong Kim","Sungmin Park","Dong-Gyun Kim","Joonmyung Choi","Ray H. Baughman","Taylor H. Ware","Habeom Lee","Hyun Kim"],
  j:"Small", y:"2024", v:"2406493", doi:"10.1002/smll.202406493", coverImg:"img/cover_small_2025.png", n:"Back Cover", cover:"https://doi.org/10.1002/smll.202570063"},
 {t:"A lamellar-morphology-based theoretical design model for predicting the thermal conductivity of semicrystalline polymers",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"International Journal of Mechanical Sciences", y:"2024", v:"282, 109622", doi:"10.1016/j.ijmecsci.2024.109622"},
 {t:"Influence of crystalline structure on creep resistance capability in semicrystalline polymers: A coarse-grained molecular dynamics study",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"International Journal of Fatigue", y:"2024", v:"188, 108517", doi:"10.1016/j.ijfatigue.2024.108517"},
 {t:"Internally connected porous PVA/PAA membrane with cross-aligned nanofiber network for facile and long-lasting ion transport zinc-air batteries",
  a:["Kwang Won Kim","Hongdeok Kim","Joonmyung Choi","Seon-Jin Choi","Ki Ro Yoon"],
  j:"Energy Storage Materials", y:"2024", v:"71, 103594", doi:"10.1016/j.ensm.2024.103594"},
 {t:"Laser-induced wet stability and adhesion of pure conducting polymer hydrogels",
  a:["Daeyeon Won","HyeongJun Kim","Jin Kim","Hongdeok Kim","Min Woo Kim","Jiyong Ahn","Koungjun Min","Youngseok Lee","Sukjoon Hong","Joonmyung Choi","C-Yoon Kim","Taek-Soo Kim","Seung Hwan Ko"],
  j:"Nature Electronics", y:"2024", v:"7, 475–486", doi:"10.1038/s41928-024-01161-9"},
 {t:"Molecular-scale mechanics of a crystalline polyethylene interface formed by projection of carbon nanotube structures",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Surfaces and Interfaces", y:"2024", v:"47, 104213", doi:"10.1016/j.surfin.2024.104213"},
 {t:"Thermodynamic mechanism governing the coalescence of conductive particles in PEDOT:PSS under laser irradiation",
  a:["Hongdeok Kim†","Daeyeon Won","Seung Hwan Ko","Joonmyung Choi"],
  j:"Macromolecules", y:"2024", v:"57, 2048–2056", doi:"10.1021/acs.macromol.3c01870", coverImg:"img/cover_macromol_2024.jpeg", n:"Supplementary Cover", cover:"https://pubs.acs.org/toc/mamobx/57/5"},
 {t:"Buried-contact organic field-effect transistor: The way of alleviating drawbacks from interfacial charge transfer",
  a:["Taehoon Hwang","Jungyoon Seo","Dashdendev Tsogbayar","Eun Ko","Jisu Park","Yujeong Jeong","Songyeon Han","Hongdeok Kim","Joonmyung Choi","Hyungju Ahn","Jihoon Lee","Hyun Ho Choi","Hwa Sung Lee"],
  j:"Advanced Functional Materials", y:"2024", v:"34(16), 2312232", doi:"10.1002/adfm.202312232"},
 {t:"Ultraviolet light debondable optically clear adhesives for flexible displays through efficient visible-light curing",
  a:["Daehwan Kim","Hongdeok Kim†","Woojin Jeon","Hyun-Joong Kim","Joonmyung Choi","Youngdo Kim","Min Sang Kwon"],
  j:"Advanced Materials", y:"2024", v:"36(14), 2309891", doi:"10.1002/adma.202309891"},
 {t:"Theoretical analysis of phase transition behavior of ALCP/CNT nanocomposites interface by photo and thermal stimulation",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Composites Part A: Applied Science and Manufacturing", y:"2023", v:"175, 107824", doi:"10.1016/j.compositesa.2023.107824"},
 {t:"Mechanical origin of shape memory performance for crosslinked epoxy networks",
  a:["Yeongbin Kim","Hongdeok Kim†","Joonmyung Choi"],
  j:"European Polymer Journal", y:"2023", v:"194, 112162", doi:"10.1016/j.eurpolymj.2023.112162"},
 {t:"Hierarchically porous gel polymer electrolyte with improved ionic conductivity enabled by interpenetrating polymer network for flexible Zn-air batteries",
  a:["Seo Won Song","Hongdeok Kim","Seoyoon Shin","Seongjin Jang","Jong-Hyuk Bae","Changhyun Pang","Joonmyung Choi","Ki Ro Yoon"],
  j:"Energy Storage Materials", y:"2023", v:"60, 102802", doi:"10.1016/j.ensm.2023.102802"},
 {t:"Observation of highly anisotropic thermal expansion of polymer films",
  a:["Settasit Chaikasetsin","Jun Young Jung","Hongdeok Kim†","Brian Sae Yoon Kim","Jungju Seo","Joonmyung Choi","Kiho Bae","Woosung Park"],
  j:"ACS Applied Materials & Interfaces", y:"2023", v:"15(22), 27166–27172", doi:"10.1021/acsami.3c03728"},
 {t:"Mechanical assessment of interfacial stability of LCP/MWCNT nanocomposites during phase transition",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Composites Part A: Applied Science and Manufacturing", y:"2023", v:"167, 107461", doi:"10.1016/j.compositesa.2023.107461"},
 {t:"Engineering silk protein to modulate polymorphic transitions for green lithography resists",
  a:["Soon-Chun Chung","Joon-Song Park","Rakesh Kumar Jha","Jieun Kim","Jinha Kim","Muyoung Kim","Juwan Choi","Hongdeok Kim","Da-Hye Park","Narendar Gogurla","Tae-Yun Lee","Heonsu Jeon","Ji-Yong Park","Joonmyung Choi","Ginam Kim","Sunghwan Kim"],
  j:"ACS Applied Materials & Interfaces", y:"2022", v:"14(51), 56623–56634", doi:"10.1021/acsami.2c17843", n:"Co-worked with Samsung Electronics"},
 {t:"Digital selective reversible phase control of monolithically integrated heterogeneous piezoelectric polymer for frequency dependent unimorph",
  a:["Daeyeon Won","Hyunmin Cho","Hongdeok Kim","Gunhee Lee","Jinhyeong Kwon","Jihye Kim","Sukjoon Hong","Joonmyung Choi","Sang-Woo Kim","Seung Hwan Ko"],
  j:"Advanced Optical Materials", y:"2022", v:"10(24), 2201206", doi:"10.1002/adom.202201206"},
 {t:"Multifunctional double-network self-healable hydrogel and its application to highly reliable strain sensors",
  a:["Jungyoon Seo","Seungtaek Oh","Giheon Choi","Hongdeok Kim","Junyoung Kim","Taehoon Hwang","Yongjun Mun","Chihyeon Kim","Joonmyung Choi","Se Hyun Kim","Eunho Lee","Hwa Sung Lee"],
  j:"ACS Applied Polymer Materials", y:"2022", v:"4(9), 6495–6504", doi:"10.1021/acsapm.2c00902"},
 {t:"Subcontinuum interpretation of mechanical behavior for cross-linked epoxy networks",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Macromolecules", y:"2022", v:"55(14), 5916–5925", doi:"10.1021/acs.macromol.2c00593", coverImg:"img/cover_macromol_2022.jpeg", n:"Supplementary Cover", cover:"https://pubs.acs.org/toc/mamobx/55/14"},
 {t:"Interface mechanics of liquid crystal polymer nanocomposites with high concentrations of MWCNTs",
  a:["Hongdeok Kim†","Hyun Kim","Joonmyung Choi"],
  j:"Composites Science and Technology", y:"2022", v:"222, 109376", doi:"10.1016/j.compscitech.2022.109376"},
 {t:"From chaos to control: Programmable crack patterning with molecular order in polymer substrates",
  a:["Hyun Kim","Mustafa K. Abdelrahman","Joonmyung Choi","Hongdeok Kim","Jimin Maeng","Suitu Wang","Mahjabeen Javed","Laura K. Rivera-Tarazona","Habeom Lee","Seung Hwan Ko","Taylor H. Ware"],
  j:"Advanced Materials", y:"2021", v:"33(22), 2008434", doi:"10.1002/adma.202008434", coverImg:"img/cover_advmat_2021.png", n:"Back Cover", cover:"https://doi.org/10.1002/adma.202170175"},
 {t:"Computational study on interfacial interactions between polymethyl methacrylate-based bone cement and hydroxyapatite in nanoscale",
  a:["Hongdeok Kim†","Byeonghwa Goh","Sol Lee","Kyujo Lee","Joonmyung Choi"],
  j:"Applied Sciences", y:"2021", v:"11(7), 2937", doi:"10.3390/app11072937"},
 {t:"Interfacial and mechanical properties of liquid crystalline elastomer nanocomposites with grafted Au nanoparticles: A molecular dynamics study",
  a:["Hongdeok Kim†","Joonmyung Choi"],
  j:"Polymer", y:"2021", v:"218, 123525", doi:"10.1016/j.polymer.2021.123525"},
];

const IN_SUBMISSION_COUNT = 13;   // 투고/심사 중 논문 수 (숫자만 표시)

/* 국내 저널, 단행본 등 다른 종류의 논문이 생기면 여기에 PUBS와 같은 형식으로 추가 */
const DOMESTIC_PUBS = [
 // {t:"논문 제목", a:["김홍덕†","최준명"], j:"대한기계학회논문집 A", y:"2027", v:"51(3), 123–130", doi:""},
];

/* Publications 페이지에 보여줄 섹션 목록. 비어 있는 섹션은 자동으로 숨겨짐.
   stats:true 인 섹션의 논문 수로 상단 통계 계산 */
const PUB_SECTIONS = [
 {title:"Journal Articles (SCIE)", items:PUBS, stats:true, korean:false,
  legend:'<sup>†</sup> First author &nbsp;·&nbsp; <sup>*</sup> Corresponding author'},
 {title:"Domestic Journal Articles", items:DOMESTIC_PUBS, korean:true,
  legend:'<sup>†</sup> 제1저자 &nbsp;·&nbsp; <sup>*</sup> 교신저자'},
];

/* ---------- Patents ---------- */
/* status: "출원" 또는 "등록"  d: 날짜(선택)  no: 출원/등록번호 */
const PATENTS = [
 {d:"2021.01", status:"출원", t:"고분자 기반 골시멘트의 경화특성 및 접합특성에 대한 멀티스케일 예측방법", inventors:"최준명, 고병화, 김홍덕", no:"KR 10-2021-0003942"},
];

/* ---------- Conferences ----------
   t: 제목  a: 저자 배열 (발표자 뒤에 *)  c: 학회명  loc: 장소  d: 연월 */
const INTL_CONF = [
 {t:"Molecular investigation of the cross-sectional morphology in CNT-derived carbon fibers", a:["Yuri Jeon*", "Hongdeok Kim", "Joonmyung Choi"], c:"15th International Conference on Nanostructures, Nanomaterials and Nanoengineering (ICNNN 2026)", loc:"Tokyo, Japan", d:"2026.10"},
 {t:"Computational interpretation of shape memory epoxy: Processing and its operation", a:["Yeongbin Kim*", "Hongdeok Kim", "Joonmyung Choi"], c:"16th World Congress on Computational Mechanics (WCCM 2024)", loc:"Vancouver, Canada", d:"2024.07"},
 {t:"Interface mechanics of LCP/MWCNT nanocomposites during nematic-to-isotropic phase transition: A molecular dynamics study", a:["Hongdeok Kim*", "Joonmyung Choi"], c:"Global Conference on Innovation Materials 2023 (GCIM 2023)", loc:"Jeju ICC, South Korea", d:"2023.06"},
 {t:"Molecular dynamics study on the mechanical response of shape memory polymers", a:["Yeongbin Kim*", "Hongdeok Kim", "Joonmyung Choi"], c:"11th International Conference on Nanostructures, Nanomaterials, and Nanoengineering (ICNNN 2022)", loc:"Online", d:"2022.10"},
 {t:"Thermo-mechanical properties of LCP/MWCNT nanocomposites interface under thermal loading: A molecular dynamics study", a:["Hongdeok Kim*", "Joonmyung Choi"], c:"11th International Conference on Nanostructures, Nanomaterials, and Nanoengineering (ICNNN 2022)", loc:"Online", d:"2022.10"},
 {t:"Interfacial properties of liquid crystal polymer and MWCNT nanocomposite at high filler concentrations: A molecular dynamics study", a:["Hongdeok Kim*", "Joonmyung Choi"], c:"15th World Congress on Computational Mechanics (WCCM-XV) & 8th Asian Pacific Congress on Computational Mechanics (APCOM-VIII)", loc:"Online", d:"2022.08"},
 {t:"Change in mechanical anisotropy of LCE by the insertion of grafted Au nanoparticles: A molecular dynamics study", a:["Hongdeok Kim*", "Joonmyung Choi"], c:"12th International Conference on Computational Methods (ICCM 2021)", loc:"Online", d:"2021.07"},
];

const DOMESTIC_CONF = [
 {t:"고분자 복합재의 계면 열전달 경로 차단 및 형성 메커니즘에 대한 분자동역학 기반 이해", a:["김영빈*", "김홍덕", "아즈말 C. 무함마드", "고광민", "천성수", "양재훈", "서대우", "백승현", "최준명"], c:"한국복합재료학회 2026년도 추계학술대회", loc:"서울 마곡 코엑스", d:"2026.11"},
 {t:"열경화성 고분자의 피로균열성장 예측을 위한 전산방법론", a:["김홍덕*", "최준명"], c:"대한기계학회 2026년도 학술대회", loc:"제주 국제컨벤션센터", d:"2026.11"},
 {t:"탄소섬유 단면 난류 미세구조의 형성 메커니즘에 대한 분자동역학 연구", a:["전유리*", "김홍덕", "최준명"], c:"대한기계학회 2026년도 학술대회", loc:"제주 국제컨벤션센터", d:"2026.11"},
 {t:"고분자 분말의 소결 거동을 분석하기 위한 멀티스케일 시뮬레이션 방법론", a:["김시현*", "김홍덕", "최준명"], c:"대한기계학회 2026년도 CAE 및 응용역학부문 학술대회", loc:"노소캄 여수", d:"2026"},
 {t:"분자동역학 전산모사를 통한 고분자의 미시상 의존적 기계적 물성 및 나노입자 보강효율 분석", a:["김홍덕*", "최준명"], c:"대한기계학회 2025년도 학술대회", loc:"하이원 그랜드호텔", d:"2025.12"},
 {t:"에폭시/그래핀 나노복합재의 감쇠 거동의 분자동역학 해석", a:["김시현*", "김홍덕", "최준명"], c:"대한기계학회 2024년도 학술대회", loc:"제주 국제컨벤션센터", d:"2024.11"},
 {t:"형상 기억 에폭시 고분자의 성형 후 열처리에 대한 형상 복원 메커니즘의 분자동역학 분석", a:["김영빈*", "김홍덕", "최준명"], c:"대한기계학회 2023년도 추계학술대회", loc:"인천 송도컨벤시아", d:"2023.11"},
 {t:"PEDOT:PSS의 레이저 유도 상분리 거동에 대한 분자동역학 기반 이해", a:["김홍덕*", "최준명"], c:"대한기계학회 2023년도 추계학술대회", loc:"인천 송도컨벤시아", d:"2023.11"},
 {t:"CNT 주변 결정화된 폴리에틸렌 고분자가 형성하는 모폴로지에 대한 분자동역학 전산모사 기반 이해", a:["김홍덕*", "최준명"], c:"대한기계학회 2023년도 CAE 및 응용역학부문 학술대회", loc:"부산 BEXCO", d:"2023.05"},
 {t:"에폭시 네트워크의 열처리 및 재가열에 의한 형상 복원특성의 분자동역학 시뮬레이션", a:["김영빈*", "김홍덕", "최준명"], c:"대한기계학회 2023년도 CAE 및 응용역학부문 학술대회", loc:"부산 BEXCO", d:"2023.05"},
 {t:"형상 기억 에폭시의 프로그래밍 및 복원 과정 동안 미시적 구조 변화에 대한 분자동역학 연구", a:["김영빈*", "김홍덕", "최준명"], c:"대한기계학회 2022년도 학술대회", loc:"제주 국제컨벤션센터", d:"2022.11"},
 {t:"가교 상태에 따른 에폭시 구성분자의 기계적 거동에 대한 하위 연속체 분석", a:["김홍덕*", "최준명"], c:"대한기계학회 2022년도 학술대회", loc:"제주 국제컨벤션센터", d:"2022.11"},
 {t:"액정고분자와 다중벽 탄소나노튜브가 형성하는 계면 구조에 대한 분자동역학 연구", a:["김홍덕*", "최준명"], c:"대한기계학회 2021년도 학술대회", loc:"광주 김대중컨벤션센터", d:"2021.11"},
 {t:"경화도에 따른 PMMA 본 시멘트 및 HAp 세라믹 간 계면 특성 변화에 대한 분자동역학 연구", a:["김홍덕*", "고병화", "최준명"], c:"2021년도 한국복합재료학회 춘계학술대회", loc:"Online (대전컨벤션센터)", d:"2021.06"},
 {t:"액정 탄성체와 그래프트 나노입자가 형성하는 계면 및 기계적 특성에 대한 분자동역학 연구", a:["김홍덕*", "최준명"], c:"대한기계학회 2020년 학술대회", loc:"Online (정선 강원랜드 컨벤션센터)", d:"2020.12"},
 {t:"고분자 복합재 내삭마 특성의 분자동역학 해석", a:["최준명*", "김영오", "김홍덕"], c:"2020 한국군사과학기술학회 종합학술대회", loc:"Online (대전컨벤션센터)", d:"2020.11"},
];

/* Conferences 페이지 섹션 목록 (비어 있는 섹션은 숨겨짐) */
const CONF_SECTIONS = [
 {title:"International Conferences", items:INTL_CONF, korean:false, legend:'<sup>*</sup> Presenting author'},
 {title:"Domestic Conferences",      items:DOMESTIC_CONF, korean:true, legend:'<sup>*</sup> 발표자'},
];

/* ---------- Projects ---------- */
const PROJECTS = [  // fund 안에서 줄바꿈이 필요하면 <br> 사용
 {period:"2025.03 – 2026.02", title:"메카노포어 기반 초고인성 유연소재의 멀티스케일 전산설계", fund:"성균관대학교<br>SKKU President Fellowship", role:"연구책임자"},
];
