const getCountVowels = (str) => {
  let count = 0;
  for (let char of str.lowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
    return count;
  }
};
