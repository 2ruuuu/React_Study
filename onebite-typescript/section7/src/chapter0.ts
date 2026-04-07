// 제네릭

function func<T>(value: T): T {
  //T 는 타입 변수
  return value;
}

const func2 = <T>(value: T): T => {
  return value;
};

let num = func(10);

let bool = func(true);

let str = func("string");
