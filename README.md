# 개인 포트폴리오

이 프로젝트는 개발자로서의 저의 역량을 강조하면서 그 동안의 과정을 시각화하여 표현하는 것을 목표로 합니다.

## ✨ 주요 기능

*   **인터랙티브 히어로 섹션**: 동적인 요소들로 구성된 매력적인 소개.
*   **자기소개 섹션**: 저의 배경, 기술, 경험에 대한 상세한 개요.
*   **프로젝트 쇼케이스**: 다양한 프로젝트를 상세 보기(모달 또는 전용 페이지)와 함께 표시하는 전용 섹션.
*   **여정 타임라인**: 저의 전문적이고 교육적인 여정을 보여주는 인터랙티브 타임라인.
*   **기술 개요**: 기술 능력과 숙련도를 분류하여 표시.
*   **커스텀 커서**: 독특한 커스텀 커서로 향상된 사용자 상호작용.
*   **부드러운 스크롤 및 애니메이션**: GSAP를 활용하여 유려한 전환과 스크롤 기반 애니메이션으로 세련된 느낌을 연출.
*   **반응형 디자인**: 데스크톱부터 모바일까지 다양한 화면 크기에 최적화.

## 🚀 기술 스택

이 프로젝트는 다음 기술들을 사용하여 구축되었습니다:

*   **Next.js**: 프로덕션을 위한 React 프레임워크로, 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 기능을 제공합니다.
*   **React**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리.
*   **TypeScript**: 일반 JavaScript로 컴파일되는 JavaScript의 타입이 지정된 상위 집합으로, 코드 품질과 유지보수성을 향상시킵니다.
*   **SCSS Modules**: CSS 전처리기(preprocessor)로, CSS Modules를 사용하여 스코프가 지정된 스타일링으로 구성됩니다.
*   **GSAP (GreenSock Animation Platform)**: 고성능의 복잡한 애니메이션을 생성하기 위한 강력한 JavaScript 애니메이션 라이브러리.
*   **Jest & React Testing Library**: 단위 및 통합 테스트를 위한 도구.

## 🛠️ 설치 및 설정

이 프로젝트를 로컬 머신에서 실행하려면 다음 단계를 따르세요:

1.  **저장소 복제(Clone)**:
    ```bash
    git clone <your-repo-url>
    cd portfolio
    ```
2.  **의존성 설치**:
    ```bash
    npm install
    # 또는
    yarn install
    ```
3.  **개발 서버 실행**:
    ```bash
    npm run dev
    # 또는
    yarn dev
    ```
    브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

4.  **프로덕션 빌드**:
    ```bash
    npm run build
    # 또는
    yarn build
    ```
5.  **프로덕션 서버 시작**:
    ```bash
    npm run start
    # 또는
    yarn start
    ```

## 📂 프로젝트 구조

프로젝트는 모듈형 컴포넌트에 중점을 둔 표준 Next.js 구조를 따릅니다:

```
.
├── public/                 # 정적 자산 (이미지, 파비콘)
├── src/
│   ├── app/                # Next.js App Router 페이지 및 레이아웃
│   ├── components/         # 재사용 가능한 UI 컴포넌트, 기능별로 분류
│   │   ├── AboutSection/
│   │   ├── AnimatedText/
│   │   ├── ContactSection/
│   │   ├── CustomCursor/
│   │   ├── DynamicBackgrounds/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── JourneyTimeline/
│   │   ├── ParallaxTitle/
│   │   ├── ProjectCard/
│   │   ├── ProjectDetailModal/
│   │   ├── ProjectGrid/
│   │   ├── ScrollFadeIn/
│   │   ├── ScrollProgressBar/
│   │   ├── SkillsSection/
│   │   └── TimelineItem/
│   ├── hooks/              # 커스텀 React 훅
│   ├── store/              # 상태 관리 (예: Zustand, Context API)
│   ├── styles/             # 전역 스타일, 변수, 믹스인
│   └── types/              # TypeScript 타입 정의
├── data/                   # 로컬 데이터 파일 (예: 프로젝트, 타임라인 데이터)
└── ...                     # 기타 설정 파일 (Next.js, ESLint, Jest 등)
```

---