function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const N = 8;
const K = 4;
const As = [...range(0, 8)].map((_, i) => 2 * i + 1);

let okIndex = N;
let ngIndex = -1;

while (okIndex - ngIndex > 1) {
  const middleIndex = Math.trunc((okIndex + ngIndex) / 2);

  if (As[middleIndex] >= K) {
    okIndex = middleIndex;
  } else {
    ngIndex = middleIndex;
  }
}

if (okIndex === N) {
  console.log(-1);
} else {
  console.log(okIndex);
}
