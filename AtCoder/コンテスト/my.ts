const main = (input: string) => {
  const splitInput = input.split("\n");

  const P = splitInput[1].split(" ").map(Number);

  let value: number[] = [];

  P.forEach((p) => {
    value.push(p);

    const arr: number[] = [];

    value.forEach((v, i) => {
      if (i === value.length - 1) {
        return;
      }

      arr.push(v + p);
    });

    value = [...new Set([...value, ...arr])];
  });

  console.log(value.length + 1);
};

// const mainReturn = main(`3
// 2 3 5`);
main(require("fs").readFileSync("/dev/stdin", "utf8"));
