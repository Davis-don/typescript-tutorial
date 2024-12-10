let greet:(a:string,b:string)=>void

greet=(name:string,greetings:string)=>{   //this gives error since signatute do not match
console.log(`${greetings + " " + name}`)
}
greet("Alex","heloo");