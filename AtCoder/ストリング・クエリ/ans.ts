function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const alphabets = [...range(0, 26)].map((_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

const input = `6
1 a 5
2 3
1 t 8
1 c 10
2 21
2 4`;

const Q = input.split(`\n`);
const que: [string, number][] = [];

Q.forEach((q, i) => {
  if (i === 0) {
    return;
  }

  const values = q.split(" ");

  if (Number(values[0]) === 1) {
    const c = values[1];
    const x = Number(values[2]);
    que.push([c, x]);
  } else {
    let d = Number(values[1]);
    const cnt: Record<string, number> = alphabets.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: 0,
      }),
      {}
    );
    while (d > 0 && que.length > 0) {
      const [c, x] = que[0];
      if (d >= x) {
        d -= x;
        cnt[c] += x;
        que.shift();
      } else {
        cnt[c] += d;
        que[0][1] -= d;
        d = 0;
      }
    }

    const ans = alphabets.reduce((acc, cur) => acc + cnt[cur] ** 2, 0);
    console.log(ans);
  }
});
