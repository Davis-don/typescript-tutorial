//explicit types
//diclares variable without giving it a value
let character : string //string
let age :number //number
let isBoolean:boolean  //boolean datatype
//due to strict type then it cant work when wrong datratype is specified

//arrays
//how to i explicitly declare an aray
//use 
let names:string[];
names = [10,20] //cant work

names = ["davis","Annisia"] //works fine

//number 
let age1: number[]
//boolean
let action :boolean[];

//Union Types
//mixed arrays
//first set it to an empty array
let mixed: (string|number|boolean)[]=[]

mixed=[12,"davis",false]
//for a regular variable
let uuid:string|number;


//objects

let myNames:Object;
myNames={name:"davis",age:20}  //works perfectlr
