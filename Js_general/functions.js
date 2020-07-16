//function expression
//foo() error
let foo = function() {
    return undefined
}

//function declaration
fun()// вызовется
function fun() {
    console.log(1)
}
//this.a = 10
//контекст this у declaration and arrow
const obj = {
    a: 2,
    decl: function() {
        console.log(this.a)
    },
    arrow: () => {
        //this.a = 3
        console.log(this.a)
    },
    arrowInDecl: function(){
        const inp = () => {
            return this.a
        }
        console.log(inp())
    }
}
obj.decl()
obj.arrow()//у arrow-func нет своего контекста this, если мы не дадим его искусственно. не может быть конструктором
obj.arrowInDecl()//В данном случае функция inp берет ближайший this(который у arrowInDecl), а его this наводит на объект obj

//---------------------------------------------------

//у arrow нет своего псевдо-массива arguments. у arguments нет вызова map, foreach и пр.
function arg(a,b,c) {
    console.log(arguments[0])
}

const arrowArg = (a,b,c) => {
    console.log(arguments[1])
}

arg('a','b','c')

//можно сделать так

const arrowFoo = (...args) => {
    args.map(el => console.log(el))
}// используем rest

arrowFoo(1,2,3)


