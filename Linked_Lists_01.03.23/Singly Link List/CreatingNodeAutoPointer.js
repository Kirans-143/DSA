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
  //Add the element at the end of the list
  addElementAtLast(element) {
    //CReate a New Node
    let newNode = new Node(element);
    this.size++;

    //Iterate over the linked list untill we reach the end
    let temp = null;
    if (this.head == null) {
      this.head = newNode;
    } else {
      temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  //print the list
  print() {
    let temp = this.head;
    let output = [];
    while (temp != null) {
      output.push(temp.data);
      temp = temp.next;
    }
    return output;
  }

  //Add element at particular index
  addElementIndex(element, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let newNode = new Node(element);
    this.size++;
    let curr = this.head;
    let prev;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let i = 0;
      while (i < index) {
        i++;
        prev = curr;
        curr = curr.next;
      }
      newNode.next = curr;
      prev.next = newNode;
    }
  }

  removeElementIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let curr = this.head;
    let prev;

    if (index === 0) {
      this.head = curr.next;
    } else {
      let i = 0;
      while (i < index) {
        i++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
    this.size--;
  }
}

let ll = new LinkedList();
ll.addElementAtLast("Sachin");
ll.addElementAtLast("Mahadev");
ll.addElementAtLast("Smith");
ll.addElementIndex("Putin", 1);
ll.removeElementIndex(3);
ll.print();
console.log(ll.print());
console.log(ll.size);
