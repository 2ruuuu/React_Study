// 맵드 타입
// 객체 타입을 조작하는 기능

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "최일우",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ...수정하는 기능
}

updateUser({
  id: 1,
  name: "최일우",
  age: 25,
});
