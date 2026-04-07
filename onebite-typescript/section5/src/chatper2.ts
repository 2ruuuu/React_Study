// 선언 합침
// 동일한 이름으로 interface를 만들게 되면 자동으로 합쳐짐

interface Person {
  name: string;
}

interface Person {
  //name: number; 충돌
  age: number;
}

const person: Person = {
  name: "",
  age: 123,
};
