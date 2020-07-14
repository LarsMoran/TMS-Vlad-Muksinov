// Принцип полиморфизма хорошо показан в примере из 5_D.js SOLID

const newBank = {
    dollar: 100,
    bitcoin: 1
}
//Даем операции с долларами и биткоинами возможность перессылки валюты в банк
class Dollar {
    sendMoney(value) {
        return newBank.dollar += value
    }
}

class Bitcoin {
    sendMoney(value) {
        return newBank.bitcoin += value
    }
}

//Теперь наш оператор не знает, с какой валютой он работает. Он получает Абстрактные данные и просто выполняет ту работу, к которой предназначен
class Operator2 {
    constructor(sender) {
        this.sender = sender
    }

    sendMoney(val) {
       return this.sender.sendMoney(val)
    }
}



const oper = new Operator2(new Dollar)//Если мы добавим операцию через PayPal, нам достаточно будет лишь передать новый класс в аргумент

oper.sendMoney(100)


console.log(newBank)
// Наш оператор ничего не знает о валюте, которую отправлет

