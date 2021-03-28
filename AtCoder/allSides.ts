declare const [i, j]: [number, number];

const allSides: [
  [number, number],
  [number, number],
  [number, number],
  [number, number]
] = [
  [i + 1, j],
  [i - 1, j],
  [i, j + 1],
  [i, j - 1],
];
