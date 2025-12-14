function twoSum(numbers, target) {
  var result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
        break;
      }
    }
  }
  return [result[0], result[1]];
}
