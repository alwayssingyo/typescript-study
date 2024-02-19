{
  /**
   * Type Inference
   */
  let text = 'hello';
  text = 'hi';

  function print(message = 'Hello') {
    console.log(message);
  }
  print('hello');
  // print(1); //error

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); //자동으로 숫자 타입으로 추론됨
}
