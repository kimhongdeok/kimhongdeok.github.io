# Hongdeok Kim — Research Homepage

## 파일 구성
| 파일 | 역할 | 수정 여부 |
|---|---|---|
| `data.js` | 모든 내용 (경력, 학력, 수상, 연구분야, 논문, 특허, 학회, 프로젝트) | **여기만 수정** |
| `index.html` | 디자인과 렌더링 코드 | 건드릴 필요 없음 |
| `README.md` | 이 안내문 | — |

## 이직·소속 변경 시 바꿀 곳 (전부 `data.js` 상단)
| 항목 | 위치 |
|---|---|
| 직함, 소속, 이메일, 전화, 주소 | `PROFILE` |
| 외부 프로필 링크 (Scholar, ORCID 등) | `PROFILE.links` |
| 사이트 설명·검색 키워드 | `SITE.description`, `SITE.keywords` |
| 강조 색상 | `SITE.themeColor`, `SITE.themeColorDark` |
| 상단 메뉴 순서·이름 | `SITE.nav` (내용이 비어 있는 탭은 자동으로 숨겨짐) |
| 새 경력 | `EXPERIENCE` 맨 위에 추가 |
| Teaching, Service 등 새 CV 섹션 | `CV_EXTRA` |
| 국내 저널 등 새 논문 종류 | `DOMESTIC_PUBS` 채우기 (또는 `PUB_SECTIONS`에 섹션 추가) |
| 특허 출원→등록 전환 | `PATENTS`의 `status`, `no`, `d` 수정 |

## 내용 추가하는 법
`data.js`를 텍스트 편집기(메모장, VS Code 등)로 열고, 해당 배열의 **맨 위**에 한 덩어리를 복사해 붙여넣은 뒤 내용만 바꿉니다. 저장하면 끝.

### 논문 (PUBS)
```js
 {t:"논문 제목",
  a:["Gildong Hong","Hongdeok Kim†","Joonmyung Choi"],   // 저자 순서. 본인 이름 뒤 †=1저자, *=교신저자
  j:"Chemical Engineering Journal", y:"2027", v:"560, 180000",
  doi:"10.1016/j.cej.2027.180000",
  n:"Front Cover"},                                        // 비고 (없으면 이 줄 삭제)
```

### 국제학회 (INTL_CONF) / 국내학회 (DOMESTIC_CONF)
```js
 {t:"발표 제목", a:["Yuri Jeon*","Hongdeok Kim","Joonmyung Choi"], c:"학회명", loc:"도시, 국가", d:"2027.05"},
 {t:"발표 제목", a:["김홍덕*","최준명"], c:"대한기계학회 2027년도 학술대회", loc:"제주 국제컨벤션센터", d:"2027.11"},
```
발표자 뒤에 `*`를 붙입니다.

### 프로젝트 (PROJECTS) / 수상 (AWARDS) / 경력 (EXPERIENCE) / 특허 (PATENTS)
각 배열의 기존 항목을 복사해서 수정하면 됩니다. 형식은 파일 안 주석 참고.

### 커버 갤러리
표지 이미지(jpg/png)를 저장소 `img` 폴더에 올린 뒤, 해당 논문 항목에 `coverImg:"img/파일명.jpg"` 를 적으면
Publications 상단에 썸네일이 자동으로 나타납니다. 썸네일을 누르면 해당 논문으로 이동합니다.

### 투고 중 논문 수
`const IN_SUBMISSION_COUNT = 13;` 의 숫자만 바꿉니다.

### 연구분야 (RESEARCH)
- 글 수정: `RESEARCH` 안의 `title`, `lead`, `bullets`, `topics[].h`, `topics[].items` 문장을 직접 고칩니다.
- 분야 추가/삭제: `{id:"...", title:"...", ...}` 블록 하나를 통째로 복사/삭제. `id`는 영문 소문자로 고유하게.
- 소주제 추가: 해당 분야의 `topics` 배열에 `{h:"소제목", items:["문장"], fig:""}` 추가.
- 그림 추가: 저장소에 `img` 폴더를 만들어 파일을 넣고 `fig:"img/파일명.png"` 로 지정.
  그림이 여러 장이면 `fig:["img/a.png","img/b.png"]`, 설명을 달려면 `caption:"그림 설명"`.
  GitHub 웹에서 폴더 만들기: "Add file" → "Upload files" 화면에서 파일을 끌어다 놓기 전에 경로를 `img/` 로 시작하게 입력하거나,
  그냥 파일을 올린 뒤 `fig:"파일명.png"` 로 적어도 됩니다 (폴더 없이 루트에 두는 경우).

## 자동으로 되는 것
- 논문/학회 번호 매기기 (최신이 가장 큰 번호)
- Publications 상단 통계 (총 편수, 1저자, 교신, 투고 중)
- 본인 이름 굵게, †/* 위첨자, "and" 연결
- CV PDF: CV 탭의 **Download CV (PDF)** 버튼 → 인쇄 창에서 "PDF로 저장"

## 주의
- 문자열 안에 큰따옴표가 필요하면 `\"` 로 적습니다.
- 각 항목 끝의 쉼표 `,` 를 빠뜨리지 마세요. 저장 후 사이트가 비어 보이면 대부분 쉼표/따옴표 문제입니다.
