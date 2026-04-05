// enum
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum을 활용하면 숫자로 역할같은 걸 분류하는 경우에 헷갈리지 않도록 고정할 수 있음
// enum을 사용할때 좋은건 내가 ko, kr, ko-kr 로 했었는지 헷갈릴 때가 있는데 그걸 해결 할 수 있다
// enum은 특이하게 컴파일 결과 사라지지 않음

enum Role {
  ADMIN = 0, //숫자를 작성하지 않아도 맨위에서 부터 인덱스가 메겨짐 0, 1, 2
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "최일우",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
  name: "수제로",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
