function bem(rootClass) {
  function generateClassNames(...modifiers) {
    return [rootClass]
      .concat(modifiers.map((modifier) => `${rootClass}--${modifier}`))
      .join(' ');
  }

  return new Proxy(generateClassNames, {
    get: (_target, prop) => bem(`${rootClass}__${prop}`),
  });
}

export default bem;
