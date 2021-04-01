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

const main = (lines: string[]): void => {
  const [A, R, N] = lines[0].split(" ").map(Number);

  let ans = A;

  if (R === 1) {
    console.log(ans);
    return;
  }

  for (let i = 0; i < N - 1; i++) {
    ans *= R;

    if (ans > 10 ** 9) {
      console.log("large");
      return;
    }
  }

  console.log(ans);
};

// const input = `2 3 4`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
