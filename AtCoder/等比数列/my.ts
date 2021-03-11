const A = 2;
const R = 3;
const N = 4;

const ans = A * R ** (N - 1);

if (ans > 10 ** 9) {
  console.log("large");
} else {
  console.log(ans);
}
