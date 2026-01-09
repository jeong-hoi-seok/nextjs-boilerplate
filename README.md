# 🚀 Next.js 14 Boilerplate

현대적인 Next.js 프로젝트를 빠르게 시작할 수 있는 보일러플레이트입니다.

## ✨ 주요 특징

- ⚡ **Next.js 14**
- ⚛️ **React 18**
- 🎨 **Tailwind CSS**
- 🐻 **Zustand**
- 📘 **TypeScript**
- 🔧 **ESLint & Prettier**
- 🪝 **Husky & lint-staged**
- 📝 **Commitlint**

## 📋 필수 요구사항

- **Node.js** >= 20
- **Yarn** 1.22.22

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
yarn install
```

### 2. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
yarn build
yarn start
```

## 📁 프로젝트 구조

```
nextjs-boilerplate/
├── src/
│   ├── app/              # Next.js App Router 페이지 및 레이아웃
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── page.tsx      # 홈 페이지
│   ├── lib/              # 유틸리티 함수
│   │   └── utils.ts
│   ├── store/            # Zustand 상태 관리
│   │   ├── actions/      # 스토어 액션
│   │   └── index.ts      # 스토어 인덱스
│   ├── styles/           # 전역 스타일
│   │   ├── globals.css
│   │   └── fonts.ts
│   └── types/            # TypeScript 타입 정의
│       ├── common.type.ts
│       └── env.d.ts
├── public/               # 정적 파일
├── next.config.mjs       # Next.js 설정
├── tailwind.config.ts    # Tailwind CSS 설정
├── tsconfig.json         # TypeScript 설정
└── package.json
```

## 🎯 사용 가능한 스크립트

| 명령어                 | 설명                   |
| ---------------------- | ---------------------- |
| `yarn dev`             | 개발 서버 실행         |
| `yarn build`           | 프로덕션 빌드          |
| `yarn start`           | 프로덕션 서버 실행     |
| `yarn lint`            | ESLint 실행            |
| `yarn prettier:format` | Prettier로 코드 포맷팅 |
| `yarn prettier:check`  | Prettier 검사          |
| `yarn eslint:format`   | ESLint 자동 수정       |
| `yarn eslint:check`    | ESLint 검사            |

## 🛡️ 코드 품질 도구

### ESLint

- Next.js 기본 설정
- TypeScript 지원
- React Hooks 규칙
- Prettier 통합

### Prettier

- Tailwind CSS 플러그인 포함
- 일관된 코드 포맷팅

### Husky & lint-staged

- 커밋 전 자동으로 ESLint 실행
- 코드 품질 보장

### Commitlint

- Conventional Commits 컨벤션 강제
- 일관된 커밋 메시지 유지

## 🎨 스타일링 가이드

이 프로젝트는 Tailwind CSS를 사용합니다. 컴포넌트 스타일링은 다음과 같이 구성됩니다:

- **컴포넌트**: `.tsx` 파일
- **스타일 모듈**: `.module.css` 파일
- **전역 스타일**: `src/styles/globals.css`

## 📝 라이선스

MIT License

## 🔗 레포지토리

[GitHub Repository](https://github.com/jeong-hoi-seok/nextjs-boilerplate)

---

**Happy Coding! 🎉**
