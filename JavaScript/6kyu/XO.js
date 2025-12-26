function XO(str) {
  if (str.toLowerCase() === "xo" || str.toLowerCase() === "ox") return true;
  let countO = 0;
  let countX = 0;
  const result = str
    .toLowerCase()
    .split("")
    .map(function (i) {
      if (i === "o") {
        countO += 1;
      }
      if (i === "x") {
        countX += 1;
      }
    });
  return countO === countX;
}
