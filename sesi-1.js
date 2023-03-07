let score
// console.log(score)

score = 100
// console.log(score, '<=== after assignment')

score = 90
// console.log(score, `<=================== re-assingment ==================`);

let studentName = 'Udin'
// console.log(studentName, `<=================== student name ==================`);

const isDone = false
// console.log(isDone, `<=================== is done? ==================`);

let student_name


let studentScore = 10
let student2Score = 20

let average = (studentScore + student2Score) / 2

// console.log(average, 'average')

let count = 1

count++
count++
count++
count--

count += 3
// console.log(count, 'count')

// console.log(typeof studentScore, 'typeof studentScore')

// tipe data string
let myName = 'Udin'
let myLocation = "Jakarta Selatan, Kebayoran Lama"
let tryString = "He\'s"

// console.log(tryString.length, 'tryString length')
// console.log(tryString[0],'index 0 of tryString')
// console.log(tryString[2],'index 2 of tryString')

myName[0] = 'D'
// console.log(myName, 'my Name')

// console.log(28 + 'h' + true + 8)

// console.log(myName[myName.length - 1], 'last char on myName')

// console.log(myLocation, `<=================== my location ==================`);

let fullName = 'John'

fullName += ' Doe'
fullName += '-Doe'


const firstName = 'Udin'
const lastName = 'Sedunia'

// console.log(`${firstName}-${lastName} "Blab'labla"`)
// console.log(fullName, `<=================== fullName ==================`);

let isValid = true
// console.log(isValid, `<=================== isValid ==================`);

isValid = 'false'
// console.log(typeof isValid, `<=================== isValid ==================`);

// console.log(!'true')


// console.log(10 == '10')
// console.log(10 === '10')

const studentName1 = 'Udin'
const studentName2 = 'Bambang'
const studentName3 = 'Bambang'

let listOfStudentScore = new Array(10, 20, 30, 40, 50)
let myArr = new Array(5)

// console.log(listOfStudentScore, 'list of student score')
// console.log(myArr, 'myArr');

let arr = []

let arrNums = [1,2,3,4,5,6]
let studentNames = ['Udin', 'Bambang', 'Ujang']
// console.log(arrNums, 'arrNums');
// console.log(studentNames, 'studentNames');

arrNums.push(7)
// console.log(arrNums);

arrNums.unshift(0)
// console.log(arrNums);
// console.log(arrNums.length);
// console.log(arrNums[2]);

arrNums[2] = 22
// console.log(arrNums);

// [].push.apply(studentNames, arrNums)
// console.log(studentNames);

let allData = [...arrNums, ...studentNames]
// console.log(allData);

let invalidConcat = [arrNums, studentNames]
// console.log(invalidConcat, ' invalidConcat');

const myNums = [1,2,3,4,5,6]

// console.log(myNums.slice(2));

// console.log(myNums.slice(2, 4));

// console.log(myNums.slice(2, 10));

// console.log(myNums.slice(-3));

// console.log(myNums.slice(1, -1));

// console.log(myNums);

let myNums2 = [1,2,3,4,5]
// console.log(myNums2.splice(2, 1));
// console.log(myNums2);

myNums2 = [1,2,3,4,5]

// console.log(myNums2.splice(1, 2));
// console.log(myNums2);

let months = ['Jan', 'Mar', "Nov", 'Des']

months.splice(1, 0, 'Feb')
// console.log(months);

months.splice(3, 2, 'Apr', 'Jun')
// console.log(months);

months.splice((months.length), 0, 'Jul', 'Aug')
// console.log(months);

months = []
// console.log(months);


let arrMulti = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
arrMulti.push([10,11,12])

console.log(arrMulti[1], 'arr Multi index 1');

let arrMultiIdx1 = arrMulti[1]

console.log(arrMultiIdx1[2]);

console.log(arrMulti[1][2]);



// console.log(arrMulti);


