//타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "최일우";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
} as Dog;

// 타입 단언의 규칙

let num1 = 10 as never;
