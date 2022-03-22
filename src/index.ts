interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "jb",
  age: 10,
  gender: "male",
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, you are ${age}, you ar a ${gender}`;
};

console.log(sayHi(person));

export {};
