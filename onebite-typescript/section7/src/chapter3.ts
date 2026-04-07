// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "ky",
  value: 123,
};

let keyPair2: KeyPair<number, string> = {
  key: 123,
  value: "ki",
};

let keyPair3: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2"],
};

// 인덱스 시그니처

interface NumberMap {
  [key: string]: number;
}

// 제네릭 인터페이스의 활용 예시
// 유저관리 프로그램
// 유저 구분: 학생 유저 / 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}
