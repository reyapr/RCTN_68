import fetch from 'node-fetch'


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json()
  })
  .then(res => {
    return res.filter(person => person.id > 2)
  })
  .then((res) => {
    console.log(res, `<=================== res ==================`);
  })
  .catch(err => {
    console.log(err, `<=================== err ==================`);
  })
  

