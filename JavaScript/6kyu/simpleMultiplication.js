// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
// Example:
// simpleMultiplication(2); // returns 16
// simpleMultiplication(1); // returns 9
// simpleMultiplication(4); // returns 32
// simpleMultiplication(5); // returns 45
