/*const fs = require('fs')

setTimeout(() => {
    console.log(1)
    process.nextTick(() => setTimeout(()=>console.log(3)))
    process.nextTick(() => console.log(4))
})

fs.readFile(__filename, () => {
    console.log(5)
})

setImmediate(() => setTimeout(()=>{
    setTimeout(()=> console.log(1000))
    console.log(100)
    process.nextTick(()=> console.log(50))
    setImmediate(()=>console.log(200))
}) )

process.nextTick(() => console.log(6))

Promise.resolve().then(() => console.log(7))


const arr = [class Animal {}, class Bird {}]

for (let i = 0; i<arr.length; i++) {
    console.log(arr[i].name)
}*/


/*let heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}

// Каждые полсекунды назначаем heightRequirement случайное число от 0 до 200.
setInterval(() => heightRequirement = Math.floor(Math.random() * 201), 500);

const mySonsHeight = 47;

// Каждые полсекунды проверяем, может ли мой сын кататься.
// Иногда это будет правдой, а иногда - ложью.
setInterval(() => console.log(canRide(mySonsHeight)), 500);*/
console.dir(fetch('aaaaa'))