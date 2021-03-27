const main = (input: string) => {
  console.log(`${input.slice(1, 3)}${input[0]}`);
};

// main(`abc`);
main(require("fs").readFileSync("/dev/stdin", "utf8"));
