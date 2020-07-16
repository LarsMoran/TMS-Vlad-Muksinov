function foo() {
    const a = 10
    function inner() {
        console.log(a)
    }
    return inner
}
let a = 20
const fun = foo()
fun()//функция inner замкнула значение а, которое было объявлено внутри функции foo

for (var i = 0; i<3; i++) { // Здесь выполнится цикл, который запишет в scope функции внутри таймаута значение i,
                            //которое будет в самом конце. решить проблему можно, поменяв var на let или сделать IIFE
    ((i)=>{setTimeout(() => {
        console.log(i)
    })})(i)
}



