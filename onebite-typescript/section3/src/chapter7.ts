//타입 좁히기
//조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 뜻함

//value => number : toFixed
//value = > string : toUpperCase
function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else {
    console.log(value.toUpperCase());
  }
}
