{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMN_PER_SHOT: number = 7;
    protected coffeBeans: number = 0;

    constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    static makeMachine(conffeBeans: number): CoffeMachine {
      return new CoffeMachine(conffeBeans);
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

    private extract(shots: number): CoffeCup {
      console.log(`Pulling ${shots} shots ... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식에서 또 다른 constructor 생성하는 경우 부모의 생성자도 호출해야 함
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number): CoffeCup {
      // super를 사용하여 부모 클래스에 있는 함수 사용
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
