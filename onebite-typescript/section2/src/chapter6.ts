// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
// typescript는 기본적으로 타입을 지정해주지 않아도 추론해서 정해준다
// any 타입은 정말 사용하면 안됨

let anyVar: any = 10;
anyVar = "hi";

console.log(anyVar);

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//모든 값을 저장할 수는 있지만 집어 넣을 수 는 없다
