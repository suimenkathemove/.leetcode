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
  const N = Number(inputRows.splice(0, 1)[0]);
  let S = inputRows.splice(0, 1)[0];
  const Q = Number(inputRows.splice(0, 1)[0]);

  for (const _ of range(Q)) {
    const [T, A, B] = inputRows.splice(0, 1)[0].split(" ").map(Number);

    switch (T) {
      case 1:
        {
          const arr = S.split("");
          const tmpA = arr[A - 1];
          const tmpB = arr[B - 1];
          arr[B - 1] = tmpA;
          arr[A - 1] = tmpB;

          S = arr.join("");
        }
        break;
      case 2:
        {
          const beforeS = S.slice(0, N);
          const afterS = S.slice(N);

          S = afterS + beforeS;
        }
        break;
    }
  }

  console.log(S);
};

// const input = `2
// FLIP
// 6
// 1 1 3
// 2 0 0
// 1 1 2
// 1 2 3
// 2 0 0
// 1 1 4`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
