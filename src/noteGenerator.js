import { CreateElement } from "./ElementGenerator";

export class NoteGenerator {
    constructor(title,content,date) {
        if (typeof title === 'string' && 
            typeof content === 'string' && 
            typeof date === 'string') {
                this.title = title;
                this.content = content;
                this.date = date;
        } else {
            console.error('Error - wrong input type')
            return alert('Warning, invalid input type!')
        }
    };

    get noteArray() {
        return [this.title,this.content,this.date];
    };
}

export class Folder {
    constructor(folderName, contentArray) {
        if (typeof folderName === 'string' && typeof contentArray === 'array') {
            this.title = folderName;
            this.content = [...contentArray];    
        } else {
            console.error('Warning wrong content type')
        }
    }
    
    appendToMemory(folder) {
        if (folder.title != '') {
            if (!localStorage.getItem(folder.title)) {
                const memory = JSON.stringify(folder)
                localStorage.setItem(folder.title, memory);
            } else {
                console.error('A folder with the same name already exists!')
                return alert('Folder title already in use')
            }
        }
    }
}