const range = (
  ...args: [end: number] | [start: number, end: number, step?: number]
): number[] => {
  const arr: number[] = [];

  // @ts-expect-error
  const [start = 0, end, step = start < end ? 1 : -1]: [
    number,
    number,
    number
  ] = args.length === 1 ? [void 0, ...args] : args;

  let i = start;
  while (step > 0 ? i < end : i > end) {
    arr.push(i);
    i += step;
  }

  return arr;
};

const A = [2, 5, 1];

const sum = [0];

range(A.length).forEach((i) => {
  let s = 0;

  range(i + 1).forEach((j) => {
    s += A[j];
  });

  sum.push(s);
});

console.log(sum);
