import { stringify, v4 as uuidv4 } from 'uuid';

export class Memorize {
    static memorizeFolder(folderName) {
        if (typeof folderName === 'string') {
            folderContent = []
        }
    }

    static memorizeNote(noteArray) {
        if (Array.isArray(noteArray)|| typeof noteArray === 'object') {
            let _UUIDRAW = uuidv4();
            let UUID = JSON.stringify(_UUIDRAW)
            const MEMORIZE = JSON.stringify(noteArray);
            localStorage.setItem(UUID,MEMORIZE);
        } else {
            console.error('Warning - parsed array is NOT an array')
        }
    }
}

export class RetrieveMemory {
    static retrieveItem(UUID) {
        if (typeof UUID === 'string') {
            localStorage.getItem(UUID);
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
}