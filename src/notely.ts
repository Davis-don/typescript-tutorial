class student{
    studentName:string
    age:number
    presence:boolean
    constructor(studentName:string,age:number,presence:boolean){
       this.studentName=studentName
       this.age=age
       this.presence=true
    }
    describe(){
        console.log(`${this.studentName} is of age ${this.age} and is ${this.presence}`)
    }
}

let studentOne = new student("Elvis",20,false);
let studentTwo = new student("Dennis",30,true);
studentOne.describe()

//create array only allowing student type data
let studentArray:student[] =[]
studentArray.push(studentOne)
studentArray.push(studentTwo)
console.log(studentArray)
