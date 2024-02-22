{
  type CoffeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeCup): CoffeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from jar 🍬');
      return true;
    }

    addSugar(cup: CoffeCup): CoffeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer
    ) {
      // 자식에서 또 다른 constructor 생성하는 경우 부모의 생성자도 호출해야 함
      super(beans);
    }

    makeCoffee(shots: number): CoffeCup {
      // super를 사용하여 부모 클래스에 있는 함수 사용
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeCup {
      // super를 사용하여 부모 클래스에 있는 함수 사용
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeeLatteMachine extends CoffeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }
}
