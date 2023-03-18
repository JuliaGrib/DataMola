'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(root) {
    this.root = root;
    this.length = 0;
  }
}
