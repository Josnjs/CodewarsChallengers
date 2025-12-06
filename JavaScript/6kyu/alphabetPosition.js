function alphabetPosition(text) {
  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var normalize = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var strNum = [];
  for (let i in normalize) {
    for (let j in alph) {
      if (normalize[i] === alph[j]) {
        strNum.push(parseInt(j));
      }
    }
  }
  return strNum.map((i) => i + 1).join(" ");
}
