type PositionType = {
  x: number;
  y: number;
};
interface positionInterface {
  x: number;
  y: number;
}

// object ★
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: positionInterface = {
  x: 1,
  y: 1,
  z: 1, // merged
};

// class ★
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements positionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends positionInterface {
  z: number;
}
type zPositionType = PositionType & { z: number };

// 😆 Only interface can be merged.
interface positionInterface {
  z: number;
}

// type PositionType {} // 식별자 중복!

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';
