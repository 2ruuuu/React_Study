//접근 제어자
//access modifier
//클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법
//public, private, protected

class Employee {
  name: string;
  //기본적으로 public이라는 접근 제어자가 붙어있음
  public age: number;
  private position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일함");
  }
}

//private으로 설정을 해주면 Employee 외부에서는 .표기법으로 프로퍼티에 접근할 수 없음
//읽을 수 조차 없음
//extends로 파생을 해도 접근 불가
//protected를 사용하면 extends는 사용가능 외부 접근 불가
const employee = new Employee("최일우", 27, "developer");
employee.name = "홍길동";
