//detect a Looop in a LinkedList
//creation of node
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}
function detectLoop(head) {
  let s = new Set();
  let temp = head;
  while (temp != null) {
    if (s.has(temp)) return true;
    s.add(temp);
    temp = temp.next;
  }
  return false;
}

function printLL(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

//creation of LinkedList
let head = new Node(100);
head.next = new Node(200);
head.next.next = new Node(300);
head.next.next.next = new Node(400);
head.next.next.next.next = new Node(500);
head.next.next.next.next.next = new Node(600);

//connecting last with third
head.next.next.next.next.next.next = head.next.next.next;

console.log(detectLoop(head));
