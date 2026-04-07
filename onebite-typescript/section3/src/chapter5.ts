// 타입 추론

let a = 10;

function func(message = "hello") {
  return "hello";
}

let d; //아무것도 선언하지 않았을 경우, 암묵적 any 타입
d = 10;
d.toFixed();
d = "hello";
d;

const num = 10; //러터럴 타입으로 추론됨 ex) let num: 10 = 10;
const str = "hello"; // let str: "hello" = "hello";

let arr = [1, "string"]; // 모든 배열 요소들을 확인해서 공통 타입으로 설정
// let arr: (string | number)[]
