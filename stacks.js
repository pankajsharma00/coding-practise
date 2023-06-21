class Node {
  constructor(value) {
    this.value = value;
    this.next = 0;
  }
}

const arrOfStack = [];

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {

    // LINKED LIST IMPLEMENTATION
    
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    
    // ARRAY IMPLEMENTATION
    
    // arrOfStack.push(value);
    // if(this.length === 0) {
    //   this.top = value;
    //   this.bottom = value;
    // } else {
    //   this.top = arrOfStack[arrOfStack.length -1];
    //   this.bottom = arrOfStack[0]
    // }
    this.length++;
    return this;
  }

  pop() {
    if(!this.top) {
      this.top = null
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next
    // this.top = arrOfStack[arrOfStack.length-1];
    // arrOfStack.pop();
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('youtube');
console.log(myStack.push('facebook'));
myStack.pop();
myStack.pop();

console.log(myStack.peek())
