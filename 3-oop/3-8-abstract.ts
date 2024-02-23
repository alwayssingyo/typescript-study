{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * abstract로 만들어진 클래스는 자체적으로 오브젝트를 생성할 수 없는 추상클래스
   * 공통기능은 해당 클래스에서 구현하고, 이를 사용하는 자식 클래스에서 달라져야하는 내용이 있다면 그 부분만 abstract 메쏘드로 정의할 수 있음
   * */
  abstract class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMN_PER_SHOT: number = 7;
    protected coffeBeans: number = 0;

    constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeBeans < shots * CoffeMachine.BEANS_GRAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeBeans -= shots * CoffeMachine.BEANS_GRAMN_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up ...🔥');
    }

    // extract이라는 함수는 추상적인 함수이기 때문에 abstract을 구현하는 클래스에서 항상 따로 구현해야 함
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines = [
    new CaffeLatteMachine(16, 'ddd'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, 'ddd'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
