{
  /**
   * Stack 자료 구조를 제네릭 타입으로 수정해보자!
   */

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full');
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        // null == undefined
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  // 인스턴스 생성시 따로 타입을 명시하지 않으면 unknown으로 할당되므로 타입지정 필요
  const stack = new StackImpl<string>(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
