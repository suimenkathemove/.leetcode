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
  const [N, W] = inputRows.splice(0, 1)[0].split(" ").map(Number);
  const items: { w: number; v: number }[] = inputRows.map((val) => {
    const [w, v] = val.split(" ").map(Number);

    return { w, v };
  });

  const value = [...range(N)].map(() =>
    [...range(W + 1)].map(() => -(10 ** 100))
  );

  value[0][0] = 0;
  value[0][items[0].w] = items[0].v;

  for (const i of range(1, N)) {
    for (const w of range(W + 1)) {
      value[i][w] = Math.max(value[i][w], value[i - 1][w]);

      if (w - items[i].w >= 0) {
        value[i][w] = Math.max(
          value[i][w],
          value[i - 1][w - items[i].w] + items[i].v
        );
      }
    }
  }

  console.log(Math.max(...value[N - 1]));
};

// const input = `6 15
// 6 5
// 5 6
// 6 4
// 6 6
// 3 5
// 7 2`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
