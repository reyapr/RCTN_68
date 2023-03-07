class Person {
  constructor(name) {
    this.name = name
  }
  
  getName() {
    return this.name
  }
}

class Employee extends Person {
  constructor (name, level) {
    super(name)
    this.level = level
  }
  
  doWork() {
    return 'complete'
  }
}

let ujang = new Person('ujang')
let udin = new Employee('udin', 'senior')

console.log(ujang.getName(), `<===================  ==================`);

console.log(udin, `<=================== udin ==================`);
console.log(udin.doWork(), `<=================== udin - do work ==================`);
console.log(udin.getName(), `<=================== udin - get name ==================`);