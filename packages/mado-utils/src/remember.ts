export function remember<T>(name: string, getValue: () => T): T {
  const ctx = globalThis as { __remember?: Map<string, unknown> };

  if (!ctx.__remember) {
    ctx.__remember = new Map();
  }

  if (!ctx.__remember.has(name)) {
    ctx.__remember.set(name, getValue());
  }

  return ctx.__remember.get(name) as T;
}
