function Human(name){
    this.name=name;
    var x=2;
    this.getX= ()=> {
        return x;
    }
}

function Employee(id,name){
    Human.call(this,name);
    this.id=id;
}

function Engineer(field,id,name) {
    Employee.call(this,id,name);
    this.field=field;
    
}

Employee.prototype=Object.create(Human.prototype);
Employee.prototype.constructor=Employee;

Engineer.prototype=Object.create(Employee.prototype);
Engineer.prototype.constructor=Engineer

const engObj=new Engineer('software',1,'Kalpana');
console.log(engObj.field);
console.log(engObj.id);
console.log(engObj.name);
console.log(engObj.getX());

Employee.prototype.eat=function() {
    console.log(this.name,' is eating');
    
}

const h=new Human('Alisha');
engObj.eat();
//console.log(engObj.eat());
//console.log(h.eat());


