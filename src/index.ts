class Human {
  public name: string;
  public age: number;
  public gender: string;
  // private 로 선언하면 내부에서만 사용 가능하다. ( 바깥에서는 접근하지 못한다. )
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, you are ${age}, you ar a ${gender}`;
};

console.log(sayHi(lynn));

export {};
