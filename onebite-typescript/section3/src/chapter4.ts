// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재

//1. 합집합 - Union 타입

let a: string | number | boolean;
a = 10;
a = "hello";
a = true;
