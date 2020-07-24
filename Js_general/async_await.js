async function get() {
    try {
        const result = await fetch('someAPI')
        result.then((data) => {
        console.log('data is received')
   })
    }
   catch {
       console.log('error')
   }
}

get()

function foo(name, age, cb) {
    console.log(name + age)
    cb()
}

foo("Lars", "Moran", async () => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => res(12), 2000)
    })
    const result = await promise
    console.log(result)
})

