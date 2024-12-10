## What is Typescript?
Is a language build on javascript that when implemented generates javascript files since browser doesnt understand typescript.
It can do everything javascript can do but javascript cant do everythinh typescript can do.

## Why use tyoescript?
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

### Objects and arrays concept

