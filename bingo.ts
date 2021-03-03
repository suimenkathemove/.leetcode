type BingoRow = [number, number, number];

type Bingo = [BingoRow, BingoRow, BingoRow];

const bingo: Bingo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

type XyValue = 0 | 1 | 2;

type Xys = [XyValue, XyValue][];

const bingoXys: Xys = (() => {
  const array = [0, 1, 2] as const;
  const bingoXys: Xys = [];
  array.forEach((i) => {
    array.forEach((j) => {
      bingoXys.push([i, j]);
    });
  });
  return bingoXys;
})();

const checkIsBingo = (bingo: Bingo, ...nums: number[]): boolean => {
  const bingoNums: number[] = (bingo as number[][]).reduce((acc, cur) => [
    ...acc,
    ...cur,
  ]);
  const filteredNums = Array.from(new Set(nums)).filter((num) =>
    bingoNums.includes(num)
  );
  const numXys: Xys = (() => {
    const numXys: Xys = [];
    filteredNums.forEach((num) => {
      bingo.forEach((_, x) => {
        bingo[x].forEach((_, y) => {
          if (num === bingo[x][y]) {
            numXys.push([x as XyValue, y as XyValue]);
          }
        });
      });
    });
    return numXys;
  })();

  const checkExistsNumXysInBingoXys = (bingoXys: Xys): boolean =>
    bingoXys.every(([bingoX, bingoY]) =>
      numXys.some(([numX, numY]) => bingoX === numX && bingoY === numY)
    );

  return (
    [0, 1, 2].some((i) =>
      checkExistsNumXysInBingoXys([
        bingoXys[3 * i],
        bingoXys[3 * i + 1],
        bingoXys[3 * i + 2],
      ])
    ) ||
    [0, 1, 2].some((i) =>
      checkExistsNumXysInBingoXys([
        bingoXys[i],
        bingoXys[i + 3],
        bingoXys[i + 6],
      ])
    ) ||
    checkExistsNumXysInBingoXys([bingoXys[0], bingoXys[4], bingoXys[8]]) ||
    checkExistsNumXysInBingoXys([bingoXys[2], bingoXys[4], bingoXys[6]])
  );
};

console.log(
  checkIsBingo(bingo, 1, 2, 3),
  checkIsBingo(bingo, 4, 5, 6),
  checkIsBingo(bingo, 7, 8, 9),
  checkIsBingo(bingo, 1, 4, 7),
  checkIsBingo(bingo, 2, 5, 8),
  checkIsBingo(bingo, 3, 6, 9),
  checkIsBingo(bingo, 1, 5, 9),
  checkIsBingo(bingo, 3, 5, 7)
);
