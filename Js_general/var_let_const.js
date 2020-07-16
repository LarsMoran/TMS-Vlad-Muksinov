console.log(myvar)//undefined

var myvar = 2

//console.log(mylet, myconst) будет ошибка, переменные объявленные в синтаксисе ES6 не всплывают

let mylet = 2
const myconst = 2
//-------------------------------------------


if(true) {
    var i = 10
}//у var область видимости может быть функциональная, либо глобальная

console.log(i)//10

function foo() {
    var d = 15
}

//console.log(d) будет ошибка d is not defined

if(true) {
    let y = 20
    const o = 30
}//у let и const есть блочная область видимости

//console.log(y,o) ошибка y, o is not defined