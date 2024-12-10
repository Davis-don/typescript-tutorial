export class notes {
    constructor(title, noteComment) {
        this.title = title,
            this.noteComment = noteComment;
    }
    format() {
        return {
            title: this.title,
            comment: this.noteComment
        };
    }
}
