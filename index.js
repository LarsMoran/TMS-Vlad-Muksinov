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


class Lol {
    constructor(name) {
        this.name = name
    }
    name = this.name
    consoled() {
      console.log(this.name)
      console.log(this.name)
    }
    
}

const log = new Lol('sanya')

log.consoled()

