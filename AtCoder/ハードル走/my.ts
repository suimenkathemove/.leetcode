// WA
const range = (
  ...args: [end: number] | [start: number, end: number, step?: number]
): number[] => {
  const arr: number[] = [];

  const [start = 0, end, step = 1] =
    args.length === 1 ? [void 0, ...args] : args;

  let i = start;
  while (step > 0 ? i < end : i > end) {
    arr.push(i);
    i += step;
  }

  return arr;
};

// import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");
const input = `2 5
1 4
2 2 20`;

const main = () => {
  const splitInput = input.split("\n");
  // 2倍にする
  const L = Number(splitInput[0].split(" ")[1]) * 2;
  // 2倍にする
  const xs = splitInput[1].split(" ").map((x) => Number(x) * 2);
  const [T1, T2] = splitInput[2].split(" ").map(Number);

  const coordinates = (() => {
    const arr = range(L).map(() => false);
    xs.forEach((x) => {
      arr[x - 1] = true;
    });
    return arr;
  })();

  let current = 0;
  let time = 0;

  const act1 = (): void => {
    // 2倍にする
    current += 1 * 2;
    time += T1 * 1;
  };

  const act2 = (): void => {
    // 2倍にする
    current += 2 * 2;
    time += T1 * 0.5 + T2 * 1 + T1 * 0.5;
  };

  const act3 = (): void => {
    // 2倍にする
    current += 4 * 2;
    time += T1 * 0.5 + T2 * 3 + T1 * 0.5;
  };

  // MEMO
  // - ハードルがある座標に止まらないようにする
  // - ハードルがある座標の、距離0.5先にもハードルがある場合はact3を選択する
  // - 進んだ後の距離0.5先にハードルが無いように進む必要がある（ジャンプするために距離0.5を走る必要があるため）

  while (current < L) {
    const shouldAct1 = coordinates.slice(current, current + 3).every((c) => !c);
    if (shouldAct1) {
      act1();
      continue;
    } else {
      const shouldAct2 = coordinates
        .slice(current, current + 5)
        .every((c, index) => (index === 1 ? c : !c));
      if (shouldAct2) {
        act2();
        continue;
      } else {
        act3();
        continue;
      }
    }
  }

  console.log(time);
};

export const ans = main();
