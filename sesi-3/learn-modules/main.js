import Employee from "./Employee.js";
import { Student, age } from './Student.js'

console.log(age, `<=================== age ==================`);

const bambang = new Student('bambang')
const udin = new Employee('udin')

console.log(udin.doWork(), `<=================== udin ==================`);

console.log(bambang.study(), `<=================== bambang  ==================`);