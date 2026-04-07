// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입
// 즉 공통된 타입이 없는 타입

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다
// Member -> {name}님 현재까지 {point}모았습니다
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다
function login(user: User) {
  if (user.tag === "ADMIN") {
    //admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    //member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}
//비동기 작업의 결과를 처리하는 객체

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
