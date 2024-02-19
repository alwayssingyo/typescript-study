{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result.length // any 타입이기 때문에 사용할 수가 없음

  const result2 = jsStrFunc();
  console.log((result2 as string).length);
  console.log((<string>result).length);
  //100% 타입을 장담할 수 있을 때만 사용..!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); // 😱

  // 예시
  const button = document.querySelector('class');
  if (button) {
    button.nodeValue;
  }
}
