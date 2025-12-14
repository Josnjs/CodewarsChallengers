const isIsogram = (str) => {
  var dic = {};
  for (let i of str.toLowerCase()) {
    dic[i] = (dic[i] || 0) + 1;
  }

  return !Object.values(dic).some((v) => v > 1);
};
