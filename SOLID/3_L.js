// Liskov substitution principle
    
    
    
// объясним на примере работников: есть класс "сотрудник" у которого предоставлен некий доступ. Мы создаем два класса:
// упраляющий и обычный работник, которые унаследывают свойства и методы сотрудника, т.к. оба им являются
class Employee {
    constructor(){}
    haveAccess() {
        console.log(`this employee got access`) 
    }
}

class Supervisor extends Employee {
    constructor() {
        super()
        this.type = 'supervisor'
    }
    Manage() {}
}

class Workerr extends Employee {
    constructor(){
        super()
        this.type = 'worker'
    }
    justBoringWork(){}
}
//создаем функцию, в которой лежат очень важные документы и, как видим,
// доступ к ним получают оба работника. можно решить проблему с помощью if, но это противоречит концепции Liskov
function highPrioritySecretMaterials(employee) {
    haveAccess()
    //if(employee.type === 'supervisor'){
    //    employee.haveAccess()
    //}
    //else console.log("You don't have access to this materials")
}

highPrioritySecretMaterials(new Supervisor)

highPrioritySecretMaterials(new Workerr)

//-----------------------------------------------

//правильный подход

//Мы можем добавить слои абстракции, либо дать метод haveAccess() только тем классам, которым они полагаются



class EmployeeWithAccess{
    haveAccess(){
        console.log('У вас есть доступ к кофе')
    }
}

class EmployeeWithoutAccess {

}

class Supervisor2 extends EmployeeWithAccess {
    manage(){}
}

class Director extends EmployeeWithAccess {
    makeBusiness(){}
}

class TypicalWorker extends EmployeeWithoutAccess {
    justWorkHard(){}
}

function roomWithCoffee(employee) {
    employee.haveAccess()
}
//доступ к кофе получают только те, которые наследуются от класса сотрудника с доступом. В остальном случае ошибка
roomWithCoffee(new Director)
roomWithCoffee(new TypicalWorker)