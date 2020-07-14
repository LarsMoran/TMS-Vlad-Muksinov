// Dependency inversion

//Приведем пример на основе перевода денег в разных формах
// и платежных системах

const bank = {}//условный банк-получатель

//cоздаем операцию для перевода в долларах
class DollarOperation {
    sendMoney() {
        return '100 dollars'
    }
}

class BitcoinOperation {
    sendMoney() {
        return '1 bitcoin'
    }
}

class Operator {
    constructor() {
        this.currency = new DollarOperation
        //если мы захотим перевести биткоин, нам придется создавать в операторе либо конструкцию if,
        // либо полностью менять код, что нарушает абстрактное представление этого класса
        // this Bitcoin = new BitcoinOperation
    }

    sendMoney() {
        bank.dollar = this.currency.sendMoney()//наш метод sendMoney не должен знать ничего про валюту, а просто выполнять перевод денег
    }
}

const operation = new Operator

operation.sendMoney()

console.log(bank)

//------------------------------------

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

