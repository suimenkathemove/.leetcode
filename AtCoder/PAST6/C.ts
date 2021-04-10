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
  const [N, M] = inputRows.splice(0, 1)[0].split(" ").map(Number);
  const foo = inputRows.splice(0, N);
  const [P, Q] = inputRows.splice(0, 1)[0].split(" ").map(Number);
  const B = inputRows.splice(0, 1)[0].split(" ").map(Number);

  let ans = 0;

  for (const i of range(N)) {
    const [K, ...rest] = foo[i].split(" ").map(Number);

    const a = rest.filter((restV) => {
      return B.includes(restV);
    }).length;

    if (a >= Q) {
      ans++;
    }
  }

  console.log(ans);
};

// const input = `4 4
// 1 4
// 2 3 1
// 3 2 1 3
// 2 2 4
// 2 1
// 2 4`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
