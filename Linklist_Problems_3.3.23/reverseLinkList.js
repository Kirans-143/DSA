class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //Updata head also
  head = prev;
  return head;
}

function printLL(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

let head = new Node(100);
head.next = new Node(200);
head.next.next = new Node(300);
head.next.next.next = new Node(400);

printLL(reverseLinkedList(head));
