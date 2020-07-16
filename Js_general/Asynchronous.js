const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const obj = {
            name: "noAlfred",
            role: 'Dolphin'
        }
        if(obj.name === 'Alfred') {
            resolve(obj)
        }
        else reject('What tha heck?!')
    }, 4000)
})

promise.then((data) => console.log(data))
.then(() => console.log('This is Alfred'))
.catch((data) => console.log(data))
.finally(() => console.log('Something has arrived'))