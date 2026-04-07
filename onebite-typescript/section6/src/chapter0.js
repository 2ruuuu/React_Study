//클래스
class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log("안녕하세요");
  }
}

//this는 지금 객체를 가리킴, 현재 객체
let studentA = new Student("최일우", "A+", 27);
