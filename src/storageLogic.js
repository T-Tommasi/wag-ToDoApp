import { stringify, v4 as uuidv4 } from 'uuid';

export class Memorize {

    static memorizeNote(noteArray) {
        if (Array.isArray(noteArray)|| typeof noteArray === 'object') {
            const MEMORIZE = JSON.stringify(noteArray);
            localStorage.setItem(noteArray.UUID,MEMORIZE);
        } else {
            console.error('Warning - parsed array is NOT an array')
        }
    }
}

export class RetrieveMemory {
    static retrieveItem(UUID) {
        if (typeof UUID === 'string') {
            const DATA = localStorage.getItem(UUID);
            console.log(DATA);
            return DATA
        }
    }

    static retrieveAllItems() {
        const keys = Object.keys(localStorage)
        const notesArray = []
        for (let key of keys) {
            console.log(key);
            let element = JSON.parse(localStorage.getItem(key));
            notesArray.push(element); //pushes to notesArray all the elements in memory
        }

        return notesArray
    }

    static retrieveAllFolders() {
        const KEYS = Object.keys(localStorage);
        const foldersArray = [];
        for (let key of keys) {
            console.log(`parsing ${key} from localStorage`);
            let element = JSON.parse(localStorage.getItem(key));
            foldersArray.push(element.folder)
        }
        return foldersArray
    }
}