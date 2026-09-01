# 링커스(Link-Us) 20기 모집 랜딩페이지

국내 최초 실무형 AI 커리어 개발 커뮤니티 **링커스** 20기 신입 부원 모집 페이지입니다.

**배포 주소** — https://linkus.ai.kr/

## 실행

```bash
npm i
npm run dev     # 개발 서버
npm run build   # dist/ 로 빌드
```

Vite + React 기반입니다.

## 구성

| 파일 | 설명 |
|---|---|
| `index.html` | HTML 껍데기 (메타 태그·OG·웹폰트) |
| `src/main.jsx` | 진입점 |
| `src/App.jsx` | 섹션 조립 + 스크롤 리빌·헤더·하단 CTA 스크립트 |
| `src/sections/*.jsx` | 섹션별 컴포넌트 (Header, Hero, Proof, About, How, Scenes, Recruit, Faq, Marquee, Apply, Footer, Dock) |
| `src/links.js` | 지원서·카카오톡·인스타·유튜브 링크 |
| `src/style.css` | 전체 스타일 |
| `src/assets/` | 로고·활동 사진 |
| `public/og/linkus-20th-og.png` | 카카오톡·SNS 공유용 썸네일 (1200×630) |

## 페이지 구조

히어로 → 수상 이력 → 소개 → 커리큘럼 → 활동 영상·사진 → 모집 안내 → FAQ → 마퀴 → 지원

## 수정 가이드

- **문구·마크업** — 고치려는 섹션의 `src/sections/<이름>.jsx` 하나만 보면 됩니다.
- **링크** — `src/links.js` 한 곳에서 관리합니다.
- **색상** — `src/style.css` 최상단 `:root`의 `--paper`, `--paper-deep`, `--accent`
- **커리큘럼 순서는 `링커슈 → 개인 프로젝트 → 팀 프로젝트` 고정입니다.** 일부 구자료(카드뉴스)에 `팀 → 개인` 순서가 남아 있으나 폐기된 버전이므로 따르지 마세요.
- **마감일 변경 시** 수정할 곳: `Header.jsx`, `Hero.jsx`, `Recruit.jsx`(선발 일정), `Marquee.jsx`, `Apply.jsx`, `Footer.jsx`, `index.html`의 메타 태그, `public/og/linkus-20th-og.png` 재제작

## 배포

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해 GitHub Pages로 배포합니다.
저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정해 두어야 합니다.

## 모집 정보

- 대상: 매주 토요일 서울에서 활동 가능한 대학교 재학·휴학·졸업유예생 (**20기부터 졸업생도 지원 가능**)
- 활동: 2026년 9월 5일 ~ 12월 26일 · 총 16주 · 매주 토요일 14:00~18:00
- 서류 마감: 2026년 8월 23일(일) 18:00
- 지원서: https://forms.gle/bUp2jUhE1HpQwmK57
- 문의: [카카오톡 채널](https://pf.kakao.com/_ccQMM) · 인스타그램 [@linkus_official_](https://instagram.com/linkus_official_)

---

링커스는 대학생에 의해 자치적으로 운영되며 정치·종교·시민단체와 전혀 무관합니다.
