# @mado/hooks

## 0.5.0

### Minor Changes

- f656709: build: mado-hooks 빌드 시스템을 rollup으로 전환
  - tsup에서 rollup + babel로 빌드 시스템 변경
  - React Compiler(babel-plugin-react-compiler) 지원 추가
  - @babel/runtime을 dependencies로 추가하여 번들 최적화
  - use-sync-external-store 의존성 제거하고 React 18/19의 네이티브 useSyncExternalStore 사용
  - ESLint 설정 업데이트 (generateConfig → defineConfig)
  - React 18+ peer dependency로 변경하여 React 19 지원
  - useOnline, useVisibilityState에 기본값 매개변수 추가
  - useIsMounted를 useSyncExternalStore로 재구현하여 SSR 지원 개선

## 0.4.1

### Patch Changes

- Updated dependencies [f2fd1b8]
  - @mado/utils@0.4.0

## 0.4.0

### Minor Changes

- 6b13875: Add useMediaQuery hook

## 0.3.3

### Patch Changes

- Updated dependencies [7da15aa]
  - @mado/utils@0.3.0

## 0.3.2

### Patch Changes

- 1b8fde4: Use shim import for useSyncExternalStore for React 16/17 compatibility

## 0.3.1

### Patch Changes

- 06534b9: Integrate useSyncExternalStore from use-sync-external-store for backward compatibility

## 0.3.0

### Minor Changes

- 0450b7a: Add useOnline and useVisibilityState hooks

## 0.2.0

### Minor Changes

- b713fbe: Add useDebounce and useIsMounted hooks

## 0.1.0

### Minor Changes

- ff6ac1d: Add useEvent and useRerender hooks

## 0.0.1

### Patch Changes

- 77f1366: 🎉
