// keyof 연산자

interface Person {
  name: string;
  age: number;
}

//객체타입의 프로퍼티 개수가 아무리 많아도 사용
// keyof는 타입이 와야함
const getPropertyKey = (person: Person, key: keyof Person) => {
  return person[key];
};

const person: Person = {
  name: "최일우",
  age: 27,
};

getPropertyKey(person, "name");

typeof person === "object";
