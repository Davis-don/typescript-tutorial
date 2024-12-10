import { hasformatter } from "../interfaces/hasformatter.js";

export class notes implements hasformatter{
    title:string
    noteComment:string

    constructor(title:string,noteComment:string){
        this.title=title,
        this.noteComment=noteComment  
    }
    format(): object {
        return {
            title:this.title,
            comment:this.noteComment
        }
    }
}

