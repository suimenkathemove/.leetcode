declare const [i, j]: Coordinate;

type Coordinate = [number, number];

const allSides: [Coordinate, Coordinate, Coordinate, Coordinate] = [
  [i + 1, j],
  [i - 1, j],
  [i, j + 1],
  [i, j - 1],
];
