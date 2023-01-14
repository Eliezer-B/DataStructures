class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //// Insert first node ////

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //// Insert last node ////

  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty , make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //// Insert at index ////

  insertAt(data, index) {
    // if index out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // node after inde
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  //// Get at index ////

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return;
  }

  //// Remove at index ////

  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //// cleare list ////
  cleaareList() {
    this.head = null;
    this.size = 0;
  }

  //// Print list data ////

  printData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(50);
// ll.insertAt(350, 1);
// ll.insertAt(250, 3);
// ll.insertAt(600, 0);

// ll.removeAt(2)
ll.removeAt(0);

// ll.cleaareList()

ll.printData();

// ll.getAt(0);
// console.log(ll);
