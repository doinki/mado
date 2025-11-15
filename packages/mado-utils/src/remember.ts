declare namespace globalThis {
  // eslint-disable-next-line no-var
  var __remember: Map<string, any> | undefined;
}

export function remember<T>(name: string, getValue: () => T): T {
  const ctx = globalThis;

  if (!ctx.__remember) {
    ctx.__remember = new Map();
  }

  if (!ctx.__remember.has(name)) {
    ctx.__remember.set(name, getValue());
  }

  return ctx.__remember.get(name) as T;
}
