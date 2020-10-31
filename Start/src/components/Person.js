class Person {
  constructor(name) {
    this.name = name;
    this.age = 100;
  }

  sayName() {
    console.log("I am class Person, My name is " + this.name);
  }
}

export default Person;
