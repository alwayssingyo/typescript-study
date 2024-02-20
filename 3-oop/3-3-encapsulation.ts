{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeMaker {
    // 샷 당 커피콩의 그램수는 외부에 노출될 필요가 없으니 private 으로 설정
    private static BEANS_GRAMN_PER_SHOT: number = 7;
    // 커피콩의 갯수는 CoffeMaker를 상속한 다른 클래스 내에서는 접근이 가능하고 외부에서는 접근이 불가능하도록 protected 으로 설정
    protected coffeBeans: number = 0;

    // 클래스를 이용해서 오브젝트를 만들 때 처음에 호출되는 함수
    // 생성자를 이용해서 생성하는 것이 아니라, constructor를 private로 설정하여 항상 static method를 이용할 수 있도록 설정하는 것이 권장됨
    private constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    // constructor를 호출하지 않고 커피 기계를 만들고 싶다면? (클래스 내부에 있는 어떠한 속성값도 필요하지 않을 때는 static 필요)
    static makeMachine(conffeBeans: number): CoffeMaker {
      return new CoffeMaker(conffeBeans);
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeBeans += beans;
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

  // constructor를 사용할 수 없으며 static 함수를 통해 오브젝트를 만들어 줌
  const maker = CoffeMaker.makeMachine(32);
  maker.fillCoffeBeans(32);

  class User {
    // getter
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('not avaiable age');
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.age);
}
