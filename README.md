# Hanteo Global Task

## 🧾 프로젝트 개요

한터글로벌 과제를 기반으로 제작된 콘텐츠형 서비스 UI입니다.  
차트, 뉴스, 이벤트 등 다양한 카테고리를 **좌우 슬라이드 기반의 인터랙션**으로 전환할 수 있으며,  
각 콘텐츠는 **무한스크롤 리스트**로 구성되어 사용자가 끊김 없이 콘텐츠를 탐색할 수 있도록 설계되었습니다.

중간 영역에는 총 4개의 **프로모션 배너**가 배치되어 있으며,  
**무한 루프**, **외부 링크 이동**이 가능한 형태로 구성되어  
사용자 참여 유도에 적합한 구조를 갖추고 있습니다.

전체 UI는 기획서에서 제시된 이미지 기반으로 구현되었고,  
**확장성과 재사용성**, 그리고 **현실적인 API 연동 흐름**을 고려한 구조화를 중점적으로 반영하였습니다.

👉 [배포된 웹사이트 바로가기](https://hanteo-global-task.vercel.app/)

---

## 🚀 실행 방법

- 패키지 설치  
  `yarn`

- 로컬 실행  
  `yarn dev`

---

## 🎥 미리보기

https://github.com/user-attachments/assets/366b328f-d9eb-423f-bd1b-63236df545c7

---

## 📌 주요 기능 요약

**0. GitHub API를 활용한 개발 자동화 구성 [(PR: #2)](https://github.com/eun-hak/hanteo-global-task/pull/2)**  
`autofix.ci` 기반으로 ESLint 및 Prettier 자동 포맷팅 워크플로우를 구성하고,  
`CodeRabbit`을 통해 자동 리뷰 주석 기능을 도입하여 협업 시 코드 품질과 생산성을 높였습니다.

---

**1. 재사용성과 확장성을 고려한 폴더 구조 설계 (FSD 도입) [(PR: #4)](https://github.com/eun-hak/hanteo-global-task/pull/4)**  
기능 중심의 FSD(Feature-Sliced Design) 폴더 구조를 도입하여  
모듈화와 유지보수가 용이한 프로젝트 기반을 마련했습니다.

---

**2. MSW 기반의 목업 API + 무한스크롤 구조 설계 [(PR: #6)](https://github.com/eun-hak/hanteo-global-task/pull/6) [(PR: #14)](https://github.com/eun-hak/hanteo-global-task/pull/14)**  
`MSW`를 활용해 서버 API가 준비되지 않은 상태에서도 기능 구현이 가능하도록 구성했고,  
`react-query` + `react-virtuoso`를 활용해 실 서비스와 유사한 **무한스크롤 기반 데이터 로딩 구조**를 구축했습니다.

---

**3. UX 강화를 위한 페이지 구조 및 캐러셀 전환 방식 고민 [(PR: #8)](https://github.com/eun-hak/hanteo-global-task/pull/8) [(PR: #12)](https://github.com/eun-hak/hanteo-global-task/pull/12)**  
초기에는 각 카테고리를 라우트로 분리했지만, 사용자 경험을 강화하기 위해  
`Swiper` 기반의 **슬라이드 전환 UI**로 구조를 전환하였습니다.  
탭과 슬라이드 간의 상태 연동에는 `Zustand`를 활용해 인터랙션의 일관성을 유지했습니다.

---

## 📁 폴더구조 (폴더구조 설명 =>[(PR: #4)](https://github.com/eun-hak/hanteo-global-task/pull/4) )

#### fsd폴더 구조를 방식으로 설계하였습니다.

![image](https://github.com/user-attachments/assets/a7549241-ba01-4df2-9920-086c2f45548a)

```bash
src/
├── app/                  # 앱 전체 설정 (Provider, Router, Theme)
├── pages/                # 루트 페이지 (App 진입점)
├── widgets/              # 여러 기능 조합 UI (BannerCarousel, CategoryTabs 등)
│   ├── BannerCarousel/
│   └── CategoryTabs/
├── features/             # 개별 기능 단위 (category-scroll 등)
├── entities/             # 핵심 도메인 모델 (infinite-content 등)
├── shared/               # 공통 유틸, 스타일, 상수, 훅 등
│   ├── lib/
│   ├── styles/
│   ├── api/
│   └── store/

```

---

## 🧯 트러블슈팅 (설명=> [(PR: #18)](https://github.com/eun-hak/hanteo-global-task/pull/18))

**이슈: Swiper loop + pagination 동기화 오류**

### 📍 원인

`Swiper`에서 `loop: true`와 `pagination(dots)`를 함께 사용할 경우,  
**슬라이드 복제**로 인해 `realIndex`와 실제 시각적 슬라이드가 불일치하며,  
dots UI와 실제 위치가 mismatch되는 문제가 발생했습니다.

### ✅ 해결 방법

- 기본 pagination을 제거하고, `CustomDots` 컴포넌트를 별도로 구현
- `onSlideChange` 이벤트로 전달되는 `realIndex` 값을 바로 쓰지 않고,
- `lodash.debounce`를 통해 index 업데이트를 지연 처리 (`100ms`)
- 마지막으로 발생한 index만 처리되도록 구현하여  
  **정확한 dots UI와 슬라이드 동기화**를 달성했습니다.

---

## 🛠 기술 스택

### Frontend

- **Framework**: [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
- **Language**: TypeScript
- **Routing**: React Router → Swiper 기반 커스텀 슬라이드 구조
- **State Management**: Zustand
- **Styling**: Emotion, CSS Variables, ThemeProvider
- **Component UI**: Swiper, React Virtuoso

### API & Mocking

- **HTTP Client**: Axios
- **Data Fetching**: React Query (`useInfiniteQuery`)
- **Mock Server**: Mock Service Worker (MSW)
- **Mock 추상화**: 공통 핸들러 `getInfiniteMockHandler` 설계

### DevOps & CI/CD

- **CI 도구**: GitHub Actions (`autofix.ci`)
- **Lint/Format**: ESLint, Prettier
- **자동 리뷰 시스템**: CodeRabbit (PR 코멘트 자동 생성)

### Design System

- **FSD 아키텍처**: Feature-Sliced Design 기반 폴더 구조
- **Icons**: 커스텀 SVG 아이콘
- **Responsive UI**: 고정형 Footer, 슬라이드 전환, 반응형 구성

### ETC

- **배포**: Vercel
- **이미지 최적화**: `public/` 내 정적 이미지 사용 (picsum → local 교체)
