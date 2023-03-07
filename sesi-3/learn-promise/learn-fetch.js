import fetch from 'node-fetch'


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json()
  })
  .then(res => {
    let result = res.filter(person => person.id > 2)
    console.log(result, `<===================  ==================`);
  })
  .then((res) => {
    console.log(res, `<=================== res ==================`);
  })
  .catch(err => {
    console.log(err, `<=================== err ==================`);
  })
  


const res = 1 + 2
console.log(res, `<=================== res ==================`);