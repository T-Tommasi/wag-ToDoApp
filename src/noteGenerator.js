import { CreateElement } from "./ElementGenerator";

export class NoteGenerator {
    constructor(title,content,date) {
        this.title = title;
        this.content = content;
        this.date = date;
    };

    get stringDetails() {
        return details = [this.title,this.content,this.date];
    };
}

function appendNoteToMemory(note) {
    
}