const name = "Genie",
  age = 3,
  gender = "male";

const sayHi = <S, N>(name: S, age: N, gender: S) => {
  console.log(`Hello ${name}, you are ${age}, you ar a ${gender}`);
};

sayHi<string, number>(name, age, gender);

export {};
