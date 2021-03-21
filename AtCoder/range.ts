function* range(...args: [number, number] | [number]) {
  const [start, end] = args.length === 2 ? args : [0, ...args];

  for (let i = start; i < end; i++) {
    yield i;
  }
}
