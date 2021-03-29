const main = (lines: string[]): void => {
  const N = Number(lines[0]);

  let ans = 0;

  function dfs(n: number, use3: boolean, use5: boolean, use7: boolean) {
    if (n > N) {
      return;
    }

    if (use3 && use5 && use7) {
      ans += 1;
    }

    dfs(10 * n + 3, true, use5, use7);
    dfs(10 * n + 5, use3, true, use7);
    dfs(10 * n + 7, use3, use5, true);
  }

  dfs(0, false, false, false);

  console.log(ans);
};

const input = `575`;
export const mainReturn = main(input.split("\n"));
// main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
