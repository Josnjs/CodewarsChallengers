const countSmileys = (arr) => {
  if (arr.length === 0) return 0;
  var chars = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ":~)",
    ";~)",
    ":D",
    ";D",
    ":-D",
    ";-D",
    ":~D",
    ";~D",
  ];

  let smiles = 0;

  for (let i of arr) {
    for (let smile of chars) {
      if (i === smile) {
        smiles++;
      }
    }
  }
  return smiles;
};
