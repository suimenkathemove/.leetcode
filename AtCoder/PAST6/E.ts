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
  const N = Number(inputRows.splice(0, 1));

  const A: number[] = [];

  const ERROR = "ERROR";

  for (const i of range(N)) {
    const n = i + 1;
    const s = inputRows[0][i];

    switch (s) {
      case "L":
        A.unshift(n);
        break;
      case "R":
        A.push(n);
        break;
      case "A":
        if (A.length <= 0) {
          console.log(ERROR);
        } else {
          console.log(A.splice(0, 1)[0]);
        }
        break;
      case "B":
        if (A.length <= 1) {
          console.log(ERROR);
        } else {
          console.log(A.splice(1, 1)[0]);
        }
        break;
      case "C":
        if (A.length <= 2) {
          console.log(ERROR);
        } else {
          console.log(A.splice(2, 1)[0]);
        }
        break;
      case "D":
        if (A.length <= 0) {
          console.log(ERROR);
        } else {
          console.log(A.splice(A.length - 1, 1)[0]);
        }
        break;
      case "E":
        if (A.length <= 1) {
          console.log(ERROR);
        } else {
          console.log(A.splice(A.length - 1 - 1, 1)[0]);
        }
        break;
      case "F":
        if (A.length <= 2) {
          console.log(ERROR);
        } else {
          // console.log(A.splice(A.length - 1 - 2, 1)[0]);
        }
        break;
    }
  }
};

// const input = `36
// RLLDBBDDLCLDFRLRRLRRFLRDRLALLELCAARF`;
// export const mainReturn = main(input.split("\n"));
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
