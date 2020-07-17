// this в js
/*this.a = 'a'

function fun() {
    console.log(this.a)
}*/
this.name = 'Vlad'
const obj = {
    name: 'Andrey',
    method() {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
//В первом случае method берет name из контекста, который он увидел на момент своего вызова, то есть obj
obj.method()
//arrow - стрелочная фукнция, у нее нет контекста this. Она пытается взять его у функции-родителя, но т.к таковой не имеется, она ссылается на window
obj.arrow()

//интересный момент с вложенностью func declaration
function foo() {
    function fun() {
        console.log(this.name)
    }
    fun()
}

//делаем call родителя

foo.call(obj)//в ноде будет undefined, т.к this функции ссылается на global, а this.name вверху привязал значение к объекту компонента. В браузере выведет Vlad
//Такое поведение говорит о том, что fun имеет свой контекст, который определился на момент вызова. Она не наследует его от фукнции родителя, а т.к fun не является
//методом объекта, она берет this.name из window или global

function func() {
        const arrow = () => {
        console.log(this.name)//у arrow нет своего this и она берет его у своего родителя в момент вызова
    }
    arrow()
}

func.call(obj)

function strange() {
    that = this//вкладываем в переменную контекст вызова фукнции strange
    function innerStrange() {
        console.log(that.name)
    }
    innerStrange()
}

strange.call(obj)//сохранив контекст this в переменной(привет Lexical Environment), мы передали его в inner фукнцию. Все работает

class User {
    constructor() {

    }
}
