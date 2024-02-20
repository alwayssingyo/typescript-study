{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    static BEANS_GRAMN_PER_SHOT: number = 7; // class level
    coffeBeans: number = 0; // instance (object) level

    // 클래스를 이용해서 오브젝트를 만들 때 처음에 호출되는 함수
    constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    // constructor를 호출하지 않고 커피 기계를 만들고 싶다면? (클래스 내부에 있는 어떠한 속성값도 필요하지 않을 때는 static 필요)
    static makeMachine(conffeBeans: number): CoffeMaker {
      return new CoffeMaker(conffeBeans);
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeBeans < shots * CoffeMaker.BEANS_GRAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeBeans -= shots * CoffeMaker.BEANS_GRAMN_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeMaker(32);
  console.log(maker);
  const maker2 = new CoffeMaker(14);
  console.log(maker2);

  const maker3 = CoffeMaker.makeMachine(3);
  console.log(maker3); // makeMachine 함수에 static이 선언되어있지 않으면 사용할 수 없음
}
