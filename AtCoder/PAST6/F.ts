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
  const [N, L, T, X] = inputRows.splice(0, 1)[0].split(" ").map(Number);

  let hukaT = 0;
  let sumT = 0;

  for (const i of range(N)) {
    const [A, B] = inputRows[i].split(" ").map(Number);

    if (B >= L) {
      if (A > T) {
        console.log("forever");

        return;
      }

      if (hukaT + A === T) {
        sumT += A;
        sumT += X;

        hukaT = 0;
      } else if (hukaT + A > T) {
        sumT += T;
        sumT += X;

        hukaT = A;
      } else {
        sumT += A;

        hukaT += A;
      }
    } else {
      sumT += A;

      hukaT = 0;
    }
  }

  console.log(sumT);
};

const input = `4 10 5 10
3 5
5 20
3 10
2 10`;
export const mainReturn = main(input.split("\n"));
// main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
