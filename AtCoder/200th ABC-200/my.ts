function* range(
  ...args: [end: number] | [start: number, end: number, step?: number]
) {
  // @ts-expect-error
  const [start = 0, end, step = start < end ? 1 : -1]: [
    number,
    number,
    number
  ] = args.length === 1 ? [void 0, ...args] : args;

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    yield i;
  }
}

const main = (inputRows: string[]): void => {
  let [N, K] = inputRows[0].split(" ").map(BigInt);

  let count = 0n;
  while (count < K) {
    if (N % 200n === 0n) {
      N /= 200n;
    } else {
      N = BigInt(`${N}200`);
    }

    count++;
  }

  console.log(Number(N));
};

// const input = `2021 4`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
