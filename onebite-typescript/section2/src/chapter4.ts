// 타입 별칭
// 공통적으로 사용되는 타입의 경우 타입별칭 즉, 타입 변수를 만들어서 그 타입으로 지정해라
// 타입 별칭은 동일한 스코프에 동일한 이름으로 지정하면 안됨
type User = {
  id: number;
  name: string;
  nickname: string;
  brith: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "최일우",
  nickname: "그래야지",
  brith: "2000.08.30",
  bio: "안녕하세요",
  location: "영등포",
};

let user2: User = {
  id: 2,
  name: "최일우",
  nickname: "그래야지",
  brith: "2000.08.30",
  bio: "안녕하세요",
  location: "영등포",
};

// 인덱스 시그니처
// key가 타입이 모두 같고 value의 타입도 모두 같으면
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
