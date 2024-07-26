// Activity1
// Class Definition⬇︎
class Person{
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting(){
        return `Hello ${this.firstName} , age is ${this.age}`
    }

    updateAge(age){
        this.age = age;
        console.log(this.age);
    }

    static stgreet(){
        return "Welcome to coder community"
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set updateFirstName(firstName){
        this.firstName = firstName;
    }

    set updateLastName(lastName){
        this.lastName = lastName;
    }
}

const obj = new Person("Akshay","",  19)
// console.log(obj.greeting());

// obj.updateAge(20)





// Activity2
// Class Inheritance⬇︎
class Student extends Person{
    static totalStudents = 0;

    constructor(id, name, age){
        super(name, age);
        this.studentId = id;
        Student.totalStudents++;
    }

    getId(){
        return this.studentId;
    }

    greeting(){
        return `Hello ${this.firstName}, stdId ${this.studentId}`
    }
}

const std1 = new Student(1040, "Akshay","", 19)
// console.log(std1.getId());

// console.log(std1.greeting());





// Activity3
// // Static Methods and Properties⬇︎
// console.log(Person.stgreet())
// console.log(Student.totalStudents)





// Activity4
// // Getters and Setters⬇︎
// const ppl = new Person("Akshay", "Thakur", 19)
// // console.log(ppl.fullName); 

// ppl.updateFirstName = "Abhishek";
// ppl.updateLastName = "Katoch";
// console.log(ppl.fullName); 
