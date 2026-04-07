// 타입스크립트의 클래스

const employee = {
  name: "최이루",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //클래스로 만들었으면 하나의 타입이 된거임
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("최일우", 27, "개발자");
//이것처럼
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
