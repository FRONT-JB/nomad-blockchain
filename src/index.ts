const sayHi = <S, N>(name: S, age: N, gender: S): string => {
  return `Hello ${name}, you are ${age}, you ar a ${gender}`;
};

console.log(sayHi<string, number>("Genie", 50, "Male"));

export {};
