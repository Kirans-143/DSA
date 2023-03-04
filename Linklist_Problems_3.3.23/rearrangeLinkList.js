//creation of node
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}
function rearrange(head) {
  let dequeue = [];
  let temp = head;
  while (temp != null) {
    dequeue.push(temp.data);
    // console.log(dequeue);
    temp = temp.next;
  }
  let dequeueLength = dequeue.length;
  let index = 0;
  temp = head;
  while (index < dequeueLength) {
    // console.log(dequeueLength);
    if (index % 2 === 0) {
      temp.data = dequeue.shift();
    } else {
      temp.data = dequeue.pop();
    }
    index++;
    temp = temp.next;
  }
  return head;
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

printLL(rearrange(head));
