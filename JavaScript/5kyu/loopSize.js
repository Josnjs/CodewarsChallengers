const loopSize = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let count = 1;
      fast = fast.next;
      while (slow !== fast) {
        fast = fast.next;
        count++;
      }
      return count;
    }
  }
  return 0;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = C;

console.log(loopSize(A));
