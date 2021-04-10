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
  const [N, K] = inputRows[0].split(" ").map(Number);
  const A = inputRows[1].split(" ").map(Number);

  const sum = [0];
  for (const i of range(N)) {
    sum.push(sum[i] + A[i]);
  }

  for (const i of range(1, N - K + 1 + 1)) {
    const till = i + K - 1;

    console.log(sum[till] - sum[i - 1]);
  }
};

// const input = `6 3
// 2 0 2 -1 0 -4`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
