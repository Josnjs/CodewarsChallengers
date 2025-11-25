const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) return [];
  var countPositives = 0;
  var sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else {
      sumNegatives += input[i];
    }
  }
  return [countPositives, sumNegatives];
};
