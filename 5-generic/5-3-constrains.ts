interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAterPay = pay(ellie);
const bobAterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🐶',
};

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐶

// K는 T라는 오브젝트의 키들 중 하나여야 함
// 리턴되는 것은 오브젝트에 있는 그 키가 가리키고 있는 value
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
