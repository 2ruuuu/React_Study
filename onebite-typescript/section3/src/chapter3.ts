//기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//객체 타입의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

animal = dog;

//dog = aniaml 은 에러가 남
