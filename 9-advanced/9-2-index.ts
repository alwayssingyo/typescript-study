{
  const obj = {
    name: 'ellie',
  };
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  // key의 value를 사용
  type Gender = Animal['gender']; // 'male' | 'female';

  // key들을 union하여 사용
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female';
  };
  const person: Person = {
    name: 'singyo',
    gender: 'female',
  };
}
