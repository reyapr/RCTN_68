let studentName = 'udin'
let studentMajor = 'IT'
let studentGpa = 3.5

let student1Name = 'bambang'
let student1Major = 'IT'
let student1Gpa = 4.0


// object
let obj = {}

let student = { 
  name: 'Udin', 
  major: 'IT',
  gpa: 3.5,
  'tempat tinggal': 'jaksel'
}

let values = ['Udin', 'major', 3.5]
let students = [student]

let keyName = 'name'

// console.log(values[0]);
// console.log(student[keyName])
// console.log(student.major);
// console.log(student['tempat tinggal']);

student.weight = 65
student['friends'] = []

student['friends'].push('Bambang')
student['friends'].push('Ujang')

console.log(student, `<=================== student ==================`);

student.name = 'Ujang'
student.address = 'jaksel'
console.log(student, `<=================== student ==================`);

student.car = {
  brand: 'H miring',
  name: 'Train',
}

// console.log(student, 'student');
// console.log(`brand: ${student.car.brand}, name: ${student.car.name}`);

// console.log(Object.keys(student));
// console.log(Object.values(student));


let nums = [2,1,3,4,5,6]
let objNums = {}
objNums[1] = 'ini 1'
objNums[15] = 'ini 15'
objNums['mytext'] = 'ini text'
objNums[3] = 'ini 3'
objNums['anotherText'] = 'init text yang lain'

// console.log(objNums);
// console.log(nums);

// var sum = 0


//-------------------------- function
function show1() {
  console.log('show function');
}

function add(num1, num2) {
  console.log(num1 + num2)
}

function showMessage(str) {
  return `my message: ${str}`
}

// show1()
// add(1, 2)
// add(2, 3)

let resultFromShowMsg = showMessage('hi from me')


// console.log(resultFromAdd, 'resultFromAdd');
// console.log(resultFromShowMsg, 'resultFromShowMsg');


// ----------------------- callback
const tambah = function(num1, num2) {
  return num1 + num2
}

const kali = function(num1, num2) {
  return num1 * num2
}

// kalkulasi([1,2], fn)
const kalkulasi = function(num1, num2, cbFn) {
  let res1 = cbFn(num1, num1)
  let res2 = cbFn(num2, num2)
  
  return res1 + res2
}

let res = kalkulasi(1, 2, tambah)
let res2 = kalkulasi(1, 2, kali)
// kalkulasi(1, 2, function(num1, num2){
//   console.log(num1, 'num1')
//   console.log(num2, 'num2');
// })
// console.log(res, 'res');
// console.log(res2, 'res2');


// -------------------- arrow function

const fn1 = () => {
  console.log('show fn1');
  return 'text'
}

const fn2 = (num) => {
  console.log(`your input is: ${num}`);
}


// fn1()
// fn2(10)

const tambahFn = (num1, num2) => {
  let res = num1 + num2
  return res
}

const calcFn = (num1, num2, cb) => {
  let res1 = cb(num1, num1)
  let res2 = cb(num2, num2)
  
  return res1 + res2
}

let calcRes = calcFn(1,2, tambahFn)

const multiFn = (n1, n2) => n1 * n2

let calcRes1 = calcFn(1, 2, multiFn)

// console.log(calcRes, 'calcRes');
// console.log(calcRes1, 'calcRes1');

// setTimeout(() => {
//   console.log('show after 2 seconds');
// }, 2000)


// --------------------- destructuring object

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false


// ----------------- destructuring obj
let myArr = ['Jhan', 'Dae', 'Jaksel']

let [firstName, _, address] = myArr

// console.log(`${firstName}_${address}`);

let myObj = {
  namaDepan: 'John',
  namaBelakang: 'Sedunia',
  address: 'palsu'
}

let {namaBelakang, namaDepan, address: alamat} = myObj

const getStudent = () => ({
  name: 'Ujang',
  lastName: 'Jangan'
})

let {lastName, name} = getStudent()
// console.log(lastName, name, 'stdntResult');

// console.log(`${namaDepan}_${namaBelakang}_${alamat}`);

// --------------------- this

// console.log(this, 'this');

let counter = {
  val: 0,
  increment: function() {
    this.val += 1
    console.log(this)
  }
}

// counter.increment()

function first() {
  console.log(this, 'from traditional fn');
}

const second = () => {
  console.log(this, 'from arrow fn');
}

// first()
// second()

function Counter() {
  this.val = 0
  console.log(this);
  
  setTimeout(function() {
    console.log(this);
  }.bind(this), 1000);
}

function CounterFn() {
  this.val = 0
  console.log(this);
  
  setTimeout(() => {
    console.log(this);
  }, 1000);
}
// const myC = new Counter()
// const myCFn = new CounterFn()


// ------------------ HOF

const sumWithMulti = (num1, num2) => {
  let res = num1 + num2
  return (num3) => num3 * res
}


const multiSummedRes = sumWithMulti(1,2)
const resHOF = multiSummedRes(2)


let animals = [
  {name: 'fluffy', species: 'cat'},
  {name: 'carlo', species: 'cat'},
  {name: 'sweety', species: 'fish'},
  {name: 'bruno', species: 'dog'},
]

let animalsRes = animals.map((animal) => {
  return `${animal.name}_${animal.species}`
})

let filteredAnimals = animals.filter((animal) => 
  animal.species === 'cat')


let orders = [
  { total: 100 },
  { total: 200 },
  { total: 300 },
] 


let total = 0

for (let i=0; i<orders.length; i++) {
  total += orders[i].total
}
  

let total2 = orders.reduce((acc, order) => {
  console.log(acc, 'acc');
  console.log(order, 'order');
  return acc + order.total
}, 0)

console.log(total2);
// console.log(filteredAnimals);
// console.log(animalsRes);




