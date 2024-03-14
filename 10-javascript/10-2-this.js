console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc(); // window
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this); // Counter
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller(); // undefined // counter.increase 포인터를 변수에 할당했기 때문에 this의 정보를 잃어버림

/************************************/

// 자바스크립트에서 함수를 정의하면 기본적으로 정의된 함수는 글로벌 객체에서 접근이 가능함
function helloWorld() {
  console.log('hello');
}
window.helloWorld(); // hello

// 그러나 const나 let 을 사용하여 선언된 변수는 window에 등록되지 않음
const ellie = 'ellie';
let singyo = 'singyo';
console.log(window.ellie); // undefined
console.log(window.singyo); // undefined

// var은 예외!! var는 윈도우에 기본적으로 등록됨 💩
var badVar = 'bad';
console.log(window.badVar); // bad

/************************************/

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this로 Bob이 출력됨.

// 이처럼 자바스크립트에서는 this라는 정보를 다른 곳으로 할당하는 순간 잃어버릴 수 있기 때문에
// 오브젝트와 함수의 관계를 묶어주기 위해서는 bind를 이용해야 함
// 혹은 클래스 내부의 바인딩하고 싶은 함수가 arrow function이면 bind를 사용하지 않아도 됨

const counter2 = new Counter();
counter.increase();
const caller2 = counter.increase.bind(counter2);
caller2();
