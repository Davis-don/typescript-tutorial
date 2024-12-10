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

~~~ts
//this is how u define the   types
//if i wants to assign value to them in futute
let name:string;
let age:number;   
let isBool:true
~~~

~~~ts
/arrays
//if i want array to hold string in future i can do this
let namesArray:string[]
namesArray.push("alex") //wount work since ts does not work on an uninitialised array

//Initilise first g
let studentNames:string[]=[]
namesArray.push("Alex") //will work

namesArray.push(20) //wount work due to strict type feature
~~~

Mixed array
~~~ts
//allows string and numbers u can also add eg boolean
let mixedArray:(string|number|boolean)[]
~~~
~~~ts
//allows string and numbers u can also add eg boolean
let mixedArray:(string|number|boolean)[]=[]
mixedArray.push(20)
mixedArray.push("Alex")
mixedArray.push(false)
console.log(mixedArray)
~~~

Alternatively you can use any keyword
```js
//Any keyword for any datatype

let mixedArray:any[]=[]
mixedArray.push(20)
mixedArray.push("Alex")
mixedArray.push(false)
console.log(mixedArray)

```

Objects

```ts
let schools:object;
schools={
    name:string,
    open:boolean
}
```
## Any datatype
```ts
//all these can work
let age:any
age=20;
age=true
age="Aliud"
age={}
```

## Better work flow Tsconfig
For better workflow and organisation for complicated projects ts config helps work things out

To implement this navigate into root folder of your projects and run 
```bash
tsc --init
```
A tsconfig file is generated and in here u modify where ur files want to be placed

Common appoach

<b>src</b> contains all ts files in tsconfig
```json
  "rootDir":"./src",                                  /* Specify the root folder within your source files. where files not needed to be diployed at the server are placed */
    "outDir": "./dist",  //speciifis where js files are located

//at the bottom add
 "include:["src]  //says compile things only in src folder 
```

To run this navigate to root folder where tsconfig file is

run ...
```bash
tsc -w
```

## Function basics
```ts
//automatically assigns type function to greet and cant be reused for different type
let greet = ()=>{
    console.log("heloo you");
}

greet=20; //wount work
greet =()=>{
    console.log("I am implementedf fine")   //runs well
}
```

```ts
let greet:Function;  //made for future use
greet=20;  //wount work

greet=()=>{
    console.log("running")   //works fine
}

```
Passing strict types to a function
```ts
let addNum=(a:number,b:number)=>{
    console.log(a+b)
}

addNum("heloo",20)   //returns error since "heloo" is not type number
```
Void Function
```ts
let addNum=(a:number,b:number):void=>{
return a+b //error since function is void
}
```
```ts
//returns a number
let addNum=(a:number,b:number):number{
return(a+b)
}
let Data = addNum(20,30)
console.log(Data)
```

## Aliases
This is where we define one name for a data type
eg
```ts
type numberOrString=number|string
let age:numberOrString
age=20 //works
age = "Alex"  //this also works
```

## Function signatures
function signature defines general structure of a function

What augument it takes in and what it returns
```ts
()=>void() //says no augument tasken and nothing is returned
```
lets define eg
```ts
let greet:(a:string,b:string)=>void

greet=(name:string,greetings:string)=>{
console.log(`${greetings + " " + name}`)
}
greet("Alex","heloo");
```
```ts
let greet:(a:string,b:string)=>void

greet=(name:string,greetings:number)=>{   //this gives error since signatute do not match
console.log(`${greetings + " " + name}`)
}
greet("Alex","heloo");
```

## The DOM and Typecasting
In this html here for notely app
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTELY</title>
    <link rel="stylesheet" href="./index.css">
</head>

<body>
    <div class="app">
        <div class="header">
            <h1>Notely Application</h1>
        </div>
       
        <div class="notely-body">
            <div class="container-to-dispay-all-notes">
                <!-- Add notes logic here -->
            </div>
            <div class="container-for-user-interface">
                <form class="form-element">
                    <label class="label-text" for="title">Title:</label><br/>
                    <input class="input-field" type="text" placeholder="title"><br/>
                    <label class="label-text" for="note">Note</label><br/>
                    <textarea class="input-field" placeholder="comment..." name="note" id=""></textarea>
                
                    <div class="button-div">
                        <button type="submit"> Add</button>
                    </div>
                </form>
            </div>
        </div>


        <div class="footer">
            <a href="#">Ts summary notes</a>
        </div>
        

        
    </div>
    
    <script src="./notely.js"></script>
</body>
</html>
```
DOM accessors used in js are similar to one used in ts eg
when we run this code 
```ts
let anchor = document.querySelector('a')
console.log(anchor) //returns  whole of the tag
```
Accessing href inside the a tag like

Reurns error is possibly null.
```ts
let anchor = document.querySelector("a");
console.log(anchor.href) //error possibly null

//this is because says if is null then u wount get href property on it to handle this we can use condition i.e
if(anchor){
console.log(anchor.href)   //handels error
}
```
or if we are certain it exists as developers
```ts
let anchor=document.querySelector("a")!  //add this exclamation at the end
console.log(anchor.href)
```

Grabbing form in above html code
```ts
//hovering through this says HTMLFormElememt
const form=document.querySelector("form") 
console.log(form)

```

But when we use a class to call the form instaed of element
```ts
//hovering it just says its an element
const form = document.querySelector(".form-element")!
console.log(form)
```
Typecasting it we say
```ts
const form = document.querySelector(".form-element") as HTMLFormElement
console.log(form)
```
Running this returns children in form element
```ts
let form=document.querySelector("form")!

const allInputFields = document.querySelectorAll(".input-field")
let titleField = allInputFields[0] as HTMLInputElement;
let noteField = allInputFields[1] as HTMLInputElement
//adding event listener for submit

form.addEventListener('submit',(e:Event)=>{
e.preventDefault()
console.log(
    titleField.value,
    noteField.value
)
})
```

## Classes
Syntax
```ts
class className{
    //class logics
}
```
Sample class
```ts
//this is not quite right since class acts as a template for future purposes therefore we use a constrctor to make is usable for future data
class student{
studentName:string = "Dennis"
age:number=20
presence:boolean=true
}

```
using constructor
```ts
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
studentOne.describe()
```

lets add all info in an array to store students objects
```ts
//only allows data with student structure in it
let studentArray:student[]=[]
studentArray.push("helloo") //wount work
studentArray.push(studentOne) //works
studentArray.push(studentTwo) //works
console.log(studentArray)  //works
```

## Access specifiers
- public
- private
- readonly

