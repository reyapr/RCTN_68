import Person from './Person.js'

class Employee extends Person {
  doWork() {
    return 'complete'
  }
}

export default Employee