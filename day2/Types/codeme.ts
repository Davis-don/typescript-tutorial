//uses strict type eg
let userName : string = "davis"
//u cant assign number to same variable name an error is thnrown at run time
//cant say //userName = 20;
//but can say 
userName="Ikou"
console.log(userName)

//function
const areaOfCircle=(radius:number)=>{
return Math.PI * radius * radius
}
console.log("area of circle is")
console.log(areaOfCircle(30))