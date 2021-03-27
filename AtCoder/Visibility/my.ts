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

const main = (input: string) => {
  const splitInput = input.split("\n");

  const [H, W, X, Y] = splitInput[0].split(" ").map((str) => Number(str) - 1);
  const S = splitInput.slice(1).map((v) => v.split(""));

  let count = 1;

  if (X < H) {
    for (const i of range(X + 1, H + 1)) {
      if (S[i][Y] === "#") {
        break;
      }
      count++;
    }
  }

  if (Y < W) {
    for (const j of range(Y + 1, W + 1)) {
      if (S[X][j] === "#") {
        break;
      }
      count++;
    }
  }

  if (X > 0) {
    for (const i of range(X - 1, -1)) {
      if (S[i][Y] === "#") {
        break;
      }
      count++;
    }
  }

  if (Y > 0) {
    for (const j of range(Y - 1, -1)) {
      if (S[X][j] === "#") {
        break;
      }
      count++;
    }
  }

  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
