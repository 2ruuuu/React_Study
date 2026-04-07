// 함수의 타입

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과 값을 반환하는지 이야기
const func = (a: number, b: number): number => {
  return a + b;
};

// 함수의 매개변수
const introduce = (name = "최일우", tall?: number) => {
  //name같은걸 필수 매개 변수라고함
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`); // +10을 넣어줄경우 tall?이므로 undefined이다 그래서
  }
  //typeof로 조건을 추가 해줘야함
};

introduce("최일우", 172);

introduce("최일우");

const getSum = (...res: number[]): number => {
  return res.reduce((acc, cur) => acc + cur, 0);
};

console.log(getSum(1, 2, 3)); //6
console.log(getSum(1, 2, 3, 4, 5)); //15
