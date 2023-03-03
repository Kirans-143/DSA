// Node createion
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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

  //add element at last
  addElementAtLast(element) {
    let newNode = new Node(element);
    this.size++;

    if (this.head == null) {
      this.head = newNode;
      newNode.prev = this.head;
    } else {
      let temp = this.head;

      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
    }
  }
  //Add element Before Particular element
  addElementBeforeAnElement(element, new_element) {
    let newNode = new Node(new_element);
    this.size++;

    let temp = this.head;
    while (temp != null) {
      if (temp.data === element) {
        let prevNode = temp.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode;
        break;
      }
      temp = temp.next;
    }
  }

  //Add element After Particular element
  addElementAfterAnElement(element, new_element) {}
}

let ll = new DoublyLinkedList();
ll.addElementAtLast("Sachin");
ll.addElementAtLast("Mahadev");
ll.addElementAtLast("Smith");
ll.addElementBeforeAnElement("Smith", "BigBull");
ll.print();
console.log(ll.print());
console.log(ll.size);
