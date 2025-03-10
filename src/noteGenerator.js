import { CreateElement } from "./ElementGenerator";
import { stringify, v4 as uuidv4 } from 'uuid';

export class NoteGenerator {
    constructor(title,content,date,folder) {
        if (typeof title === 'string' && 
            typeof content === 'string' && 
            typeof date === 'string') {
                this.title = title;
                this.content = content;
                this.date = date;
                this.folder = folder;
                this.UUID = uuidv4();
        } else {
            console.error('Error - wrong input type')
            return alert('Warning, invalid input type!')
        }
    };

    set folder(folderName) {
        if (folderName === 'string' || !folderName)
        {
            if (folderName) {
                this.folder = folderName;
            } else {
                this.folder = 'default folder'
            }
        } else {
            console.error('Warning folderName is not in an acceptable format')
        }
    }

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