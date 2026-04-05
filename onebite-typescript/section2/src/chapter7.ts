// void
// void -> 공허 -> 아무것도 없다

function func1(): string {
  //함수의 반환값을 타입으로 지정해 주면됨
  return "hello";
}

function func2(): void {
  //반환값이 없을 경우 void 타입으로 지정해주면 됨
  console.log("hi");
}
console.log(func1());
console.log(func2());

//물론 변수에도 void 타입을 지정해 줄 수 있음
let a: void;
//하지만 void로 지정한 변수에는 어떠한 값도 담을 수 없음
//오직 undefined만 담을 수 있음

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  //반환을 할 수가 없어서, 정상적으로 종료가 불가능한 경우 never타입을 씀
  //이 함수의 반환값이 있는것 자체가 모순이다 싶을 때 사용
  while (true) {}
}
