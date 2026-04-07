// 인터페이스의 확장

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 타입 별칭이어도 확장할 수 있음
// 다중 확장

interface DogCat extends Dog, Cat {}
