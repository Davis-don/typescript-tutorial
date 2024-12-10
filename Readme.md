## What is Typescript?
Is a language build on javascript that when implemented generates javascript files since browser doesn't understand typescript.

It can do everything javascript can do but javascript cant do everything typescript can do.

## Why use typescript?
- Has strict types i.e when u declare variable as a string u cant store a value of different datatype it gives an error
- It catches error at compile time
- Hass added features such as tupples

## How do u install it in your computer?
Ensure node is installed in your computer if it is not download,install and add into environment variables.

Open the terminal or command prompt and run this command.
~~~bash
npm install -g typescript
~~~

## How do u compile typescript
- Open a folder in your computer and name it what you want.

- Inside the folder create a file and add a ts extension on it.
- Add code into it eg.

~~~ts
codeme.ts  //file name

console.log("heloo world")
~~~

- To compile this we open the terminal and navigate to the root ditectory of the file.

then run the command
~~~bash
# this creates another js file with same name namely codeme.js
tsc codeme.ts
~~~
or
~~~bash
# This creates same file as above but now flag w means weatch i.e watches for changes and compiles it automatically
tsc codeme.ts -w
~~~

## What are the type basics of typescript?
Typescript alllows the following types
- Number
- String
- Object
- Character
- boolean

~~~ts
let name = "Alex"
// cant reuse name as number since compiler knows its string
name=20   //this cant work

//Also can be declared as 
let name: string = "Alex"
let age:number=20;
let isBoolean = true;

//function implemented in this analogy
let areaOfCircle = (radius:number)=>{

return Math.PI * radius * radius
}

console.log(areaOfCircle(7))
~~~

## Objects and arrays concept
Due to strict functionality in ts objects and arrays are impemented differently in some way
 ### Arrays
 ~~~ts
 let names = ["Alex","John","Pius"]
 //when u push any other value rather than string an error is thrown.
 names.push(20) //wount work
 names=[20] //wount work
 names.push("Charles") //will work

 ~~~
- Everything has to be defined explicitly in ts
- For an array holding any kind of datatype i.e mixed array

~~~ ts
let mixedType = ["alex",true,20]
mixedType.push(false)  //will work
mixedType.push("John") //will work
mixedType.push(59) //will work
console.log(mixedType)
~~~

### Objects
~~~ts
let student = {
    name:"Alex",
    age:20,
    presence:true
}
student.name = 20 //error is throen only allws string in name field

student={
    name:"Danniel"    //cant work since is strict must have the other fields too age and presence
}

student={
    name:"Daniel",
    age:30,         // this now works well
    presence:false
}
~~~

## Explicit Types
