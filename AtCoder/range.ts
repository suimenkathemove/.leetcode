const range = (
  ...args: [end: number] | [start: number, end: number, step?: number]
) => {
  const arr = [];

  const [start = 0, end, step = 1] =
    args.length === 1 ? [void 0, ...args] : args;

  let i = start;
  while (step > 0 ? i < end : i > end) {
    arr.push(i);
    i += step;
  }

  return arr;
};

function* range(...args: [start: number] | [start: number, end: number]) {
  const [start, end] = args.length === 1 ? [0, ...args] : args;

  for (let i = start; i < end; i++) {
    yield i;
  }
}
