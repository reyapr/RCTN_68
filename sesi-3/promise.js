


// fulfillment
// let myFirstPromise = new Promise((resolve, reject) => {
  
//   resolve('ini janji saya sudah terpenuhi ya')
  
// })

// myFirstPromise
//   .then((res) => {
//     console.log(res, `<=================== 1-fulfillment ==================`);
//   })
//   .catch((err) => {
//     console.log(err, `<=================== 1-rejection ==================`);
//   })
  
// let mySecondPromise = new Promise((resolve, reject) => {
//   reject('sorry belum bisa penuhin janjinya')
// })
  
// mySecondPromise
//   .then((res) => {
//     console.log(res, `<=================== 2-fulfillment ==================`);
//   })
//   .catch((err) => {
//     console.log(err, `<=================== 2-rejection ==================`);
//   })
  
  
let beliBakso = (uang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(uang > 10000) {
        resolve({
          name: 'bakso',
          sambal: '4 sendok',
          topping: ['bihung', 'sayur'],
          kecap: '3ml'
        })
      } else {
        reject('mohon maap nih, duitnya kurang pak')
      }
    }, 2000);
  })
}

const duitBambang = 12000

let hasilBambangBeliBakso = beliBakso(duitBambang)

hasilBambangBeliBakso
  .then((res) => {
    console.log(res, `<=================== res ==================`);
  })
  .catch((err) => {
    console.log(err, `<=================== err ==================`);
  })