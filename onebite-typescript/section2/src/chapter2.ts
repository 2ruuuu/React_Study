// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "ilwoo"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr1: [number, string, boolean] = [123, "hi", true];

let multiArr2: (string | number | boolean)[] = [123, "hi", true];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users = [
  ["이정환", 1],
  ["최일우", 2],
  ["정백호", 3],
  ["수제로", 4],
];
