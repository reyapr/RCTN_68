import Person from './Person.js'

export const age = 15

export class Student extends Person {
  
  study() {
    return 'I learn something'
  }
}
