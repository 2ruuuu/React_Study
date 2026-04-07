//인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
}

const person: Person = {
  name: "최일우",
  sayHi: function () {
    console.log("Hi");
  },
};
