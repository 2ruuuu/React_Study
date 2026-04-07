//map 메서드

const arr = [1, 2, 3];
const newArr = arr.map((e) => e * 2);
console.log(newArr);

const map = <T, U>(arr: T[], callback: (item: T) => U) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
};

map(arr, (it) => it * 2);
