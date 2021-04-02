// WA

const main = (lines: string[]): void => {
  const arr = lines
    .slice(1)
    .map((str) => str.split(" ").map(Number))
    .sort(
      (a, b) =>
        b.reduce((acc, cur) => acc + cur) - a.reduce((acc, cur) => acc + cur)
    );

  let ans = 0;

  arr.forEach((item, index) => {
    const [a, b] = item;

    if (index % 2 === 0) {
      ans += a;
    } else {
      ans -= b;
    }
  });

  console.log(ans);
};

const input = `3
10 10
20 20
30 30`;
export const mainReturn = main(input.split("\n"));
// main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
