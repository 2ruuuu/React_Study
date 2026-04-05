// Unknown - 전체 집합
// unknown 타입은 모든 타입을 수 있음 전체 집합이기 때문에

function unknownExan() {
  let a: unknown = 1;
  let b: unknown = "hello";
}

// Never 타입 - 가장 작은 집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
}

// Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; //이게 가능함 void 밑에 undefined가 있어서
  }
}

// Any 타입
// 치트키 타입, 업캐스팅 다운캐스팅 다 가능
// 하지만 never 타입에는 any 타입을 넣지는 못함
// never타입은 공집합 즉 아무것도 없다 는 의미기 때문에 못넣음
