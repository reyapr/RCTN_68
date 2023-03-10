import fetch from 'node-fetch'

const userUrl = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = async () => {
  try {
    const response = await fetch(userUrl)
    const result = await response.json()
  
    const idAbove3 = result.filter(d => d.id > 2)

    console.log(idAbove3, `<=================== result ==================`);
  } catch (err) {
    console.log(`something went wrong. code: ${err.code}, with url: ${userUrl}`)
  }
  
}
fetchUsers()

const res = 1 + 2
console.log(res, `<=================== res ==================`);

(async () => {
 const res = await fetch('https://jsonplaceholder.typicode.com/users?id=2')
 const result = await res.json()
 console.log(result, `<=================== IIFE ==================`); 
})()