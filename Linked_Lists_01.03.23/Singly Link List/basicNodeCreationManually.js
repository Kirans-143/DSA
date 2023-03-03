// Node createion
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
let n1 = new Node("Kiran");
let n2 = new Node("Jhon");
n1.next = n2;

let ll = new LinkedList();
ll.head = n1;
ll.size = 2;

console.log(ll);
