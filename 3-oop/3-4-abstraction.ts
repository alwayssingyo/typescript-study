{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  interface CommercialCoffeMaker {
    makeCoffee(shots: number): CoffeCup;
    fillCoffeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeMachine implements CoffeMaker, CommercialCoffeMaker {
    private static BEANS_GRAMN_PER_SHOT: number = 7;
    protected coffeBeans: number = 0;

    private constructor(coffeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeBeans(45);
      this.machine.clean();
    }
  }

  // 추상화는 정보은닉(캡슐화) / 인터페이스를 이용 을 통해 진행할 수 있음
  // const maker: CoffeMachine = CoffeMachine.makeMachine(32);
  // maker.fillCoffeBeans(32);
  // maker.makeCoffee(2);

  // CoffeMaker 인터페이스를 사용하면 fillCoffeBeans 함수를 사용할 수 없음
  // const maker2: CoffeMaker = CoffeMachine.makeMachine(32);
  // maker2.fillCoffeBeans(32);
  // maker2.makeCoffee(2);

  // const maker2: CommercialCoffeMaker = CoffeMachine.makeMachine(32);
  // maker2.fillCoffeBeans(32);
  // maker2.makeCoffee(2);
  // maker2.clean();

  const maker: CoffeMachine = CoffeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
