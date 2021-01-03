type ClassNameGenerator = {
  (...modifiers: string[]): string;
  [key: string]: ClassNameGenerator;
};

function bem(rootClass: string): ClassNameGenerator {
  function generateClassNames(...modifiers: string[]) {
    return [rootClass]
      .concat(modifiers.map((modifier) => `${rootClass}--${modifier}`))
      .join(' ');
  }

  // `generateClassNames` isn't really a `ClassNameGenerator`
  // but the virtual object returned by the Proxy is - however
  // TypeScript doesn't support using a different type for a
  // Proxy than its `target`. see microsoft/TypeScript#20846
  return new Proxy(generateClassNames as ClassNameGenerator, {
    get: (_target, prop: string) => bem(`${rootClass}__${prop}`),
  });
}

export default bem;
