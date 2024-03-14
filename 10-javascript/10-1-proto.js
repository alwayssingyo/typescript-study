const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
// x와 y는 동일한 object의 proto를 상속하고 있기 때문에 true임
console.log(x.__proto__ === y.__proto__);

// array 라는 변수의 오브젝트는 Array를 상속하며 Array라는 프로토는 object를 상속함
// 자바스크립트에 있는 모든 오브젝트들은 object라는 프로토를 가지고 있는 것.
const array = [];
console.log(array);

console.clear();

function CoffeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log('making... 🫕');
  // };
}
// Prototype member level
CoffeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... 🫕');
};
const machine1 = new CoffeMachine(10);
const machine2 = new CoffeMachine(20);

console.log(machine1);
console.log(machine2);

// machine1, machine2는 CoffeMachine이라는 프로토를 상속하고 있으며 CoffeMachine는 object 프로토를 상속하고 있음

/***************************/
function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();

// 자바스크립트에서는 타입스트립트처럼 인터페이스나 제네릭 등은 없지만 프로토타입을 이용해서 상속을 구현할 수 있음
// 고로 프로토타입은 자바스크립트에서 객체지향적 프로그래밍인 상속을 하기 위해서 쓰이는 것! 코드를 재사용하기 위해 만들어진 것!
