//__proto__ && prototype

function foo(name, age) {
    this.name = name
    this.age = age
    this.func = function() {
        return `${this.name} + ${this.age}`
    }
}

const fii = new foo('vlad', 21)

console.log(fii.constructor.prototype === foo.prototype)

class Person {
    constructor(obj) {
        this.obj = obj
    }

    method() {
        Object.values(this.obj).map(el => console.log(el))
    }
}

const chto = new Person({
    a: 1,
    b: 2,
    c: 3
})

chto.method()
