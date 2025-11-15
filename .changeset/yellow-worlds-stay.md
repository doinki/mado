---
'@mado/hooks': minor
---

build: mado-hooks 빌드 시스템을 rollup으로 전환

- tsup에서 rollup + babel로 빌드 시스템 변경
- React Compiler(babel-plugin-react-compiler) 지원 추가
- @babel/runtime을 dependencies로 추가하여 번들 최적화
- use-sync-external-store 의존성 제거하고 React 18/19의 네이티브 useSyncExternalStore 사용
- ESLint 설정 업데이트 (generateConfig → defineConfig)
- React 18+ peer dependency로 변경하여 React 19 지원
- useOnline, useVisibilityState에 기본값 매개변수 추가
- useIsMounted를 useSyncExternalStore로 재구현하여 SSR 지원 개선
