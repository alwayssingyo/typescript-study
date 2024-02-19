{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {} // readonly는 첫번째 버전으로만 작성 가능함

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  // 인덱스로 사용해야하기 때문에 사용하는 곳에서의 가독성이 매우 떨어짐
  student[0]; // name
  student[1]; // 123
  // 구조분해할당하여 사용할 수 있지만 불편함
  const [name, age] = student;
  //튜플의 대표적인 예시는 useSate!!
}
