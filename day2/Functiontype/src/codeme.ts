let greet = ()=>{
    console.log("hello world")
}

greet = "hello" //wount work

//for future use as a function
let greet2:Function;
greet = ()=>{
    console.log("heloo world 2")
}

const add=(a:number,b:number,c:string|number=10) =>{
    console.log(a+b)
    console.log(c)
}

add(12,29)

const minus=(a:number,b:number):number=>{   //shows fynction will return a number
    return(a-b)
}
const minus1=(a:number,b:number):void=>{   //shows fynction will return nothing i.e void
    console.log(a-b)
}