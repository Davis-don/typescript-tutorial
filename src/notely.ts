import { notes } from "./classes/noteDetail.js"

let noteData:any[]=[]
let form = document.querySelector("form")!
let inputFields = document.querySelectorAll(".input-field") 
let titleField = inputFields[0] as HTMLSelectElement
let noteField = inputFields[1] as HTMLSelectElement
let ul = document.querySelector(".list-item")!;

form.addEventListener("submit",(e)=>{
    e.preventDefault()
const note1=new notes(titleField.value,noteField.value)
// noteData.push(note1.format());
//console.log(noteData)
noteData.push(note1.format())


let li=document.createElement("li")!
ul.append(li)
let h4=document.createElement("h4")!
let p=document.createElement("p")!
noteData.forEach(note => {
    h4.innerHTML=note.title  
    p.innerHTML=note.comment
});

li.append(h4)
li.append(p)


})
