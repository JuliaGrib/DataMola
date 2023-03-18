'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(root) {
    this.root = new Node(root);
    this.length = 0;
  }

  addNode(value, position = null) {
    try {
      if (!(position >= 0 && position <= this.length) && position !== null) {
        throw new Error(ERRORS.numberNotValide);
      }

      const node = new Node(value);

      if (position === null) {
        let current = this.root;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      } else if (position >= 0) {
        let current = this.root;

        let prev = null;

        let index = 0;

        while (index <= position) {
          prev = current;
          current = current.next;
          index++;
        }

        prev.next = node;
        node.next = current;
      }

      this.length++;

      console.log(INFO.nodeAddSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  removeNode(position = this.length) {
    try {
      if (position === 0) {
        throw new Error(ERRORS.rootNotDelete);
      }
      if (!(position > 0 && position <= this.length) && position !== null) {
        throw new Error(ERRORS.numberNotValide);
      }
      let current = this.root;

      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;

      this.length--;

      console.log(INFO.nodeDelSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  print() {
    const result = [];
    let current = this.root;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(','));
  }
}

const test = new List(0);
test.addNode(1);
test.addNode(3);
test.addNode(5);
test.addNode(2, 1);
test.addNode(4, 3);
test.addNode(6, 5);
