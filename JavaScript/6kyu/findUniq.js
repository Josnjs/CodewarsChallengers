function finduniq(arr) {
  var count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let num in count) {
    if (count[num] === 1) {
      return Number(num);
    }
  }
}
