// object
let user: {
  id?: number; //옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: "최일우",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

console.log(user.id);
console.log(dog.color);

let config: {
  readonly apiKey: string; //apikey 처럼 절대 수정되면 안된다하면 readonly를 붙여서 수정 불가로 만들어야함
} = {
  apiKey: "My API Key",
};
