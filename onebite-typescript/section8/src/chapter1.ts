// 인덱스드 엑세스 타입
// 밑에 처럼 객체 타입으로 부터 특정 프로퍼티의 타입을 쏙 뽑아서 변수에 정의해 줄 수 있도록 도와주는 문법
// ex) Post에서 author라는 프로퍼티 타입만 적용시키고 싶을 때

//interface는 객체 타입 정의에만 특화되어있음

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    //새로운 프로퍼티가 추가 되어도 별도로 추가 작업이 필요없음
    //location: string;
  };
}[];

//const key = "author"; 이렇게하고 Post[key] 이런식으로 넣을 수 없음
//아이디만 가져오고 싶다.그럼 Post["author"]["id"]이런식으로 하면 됨
// 인덱스트 엑세스 타입은 객체 타입 뿐만아니라 배열 타입에서 도 특정 부분을 떼어올 수 있음

const printAuthorInfo = (author: PostList[number]["author"]) => {
  console.log(`${author.name}-${author.id}`);
};

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "최일우",
  },
};

//튜블 타입에서는 이런식으로 가져올 수 있음

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type tubNum = Tup[number];
//이렇게 하게 되면 type tubNum = string | number | boolean 최적의 타입을 뽑아옴
//공통된게 없으니까 셋의 유니온 타입을 뽑아온것임
