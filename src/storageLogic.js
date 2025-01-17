import { stringify, v4 as uuidv4 } from 'uuid';

export class Memorize {
    static memorizeFolder(folderName) {
        if (typeof folderName === 'string') {
            folderContent = []
        }
    }

    static memorizeNote(noteArray) {
        if (typeof noteArray === 'array') {
            let UUID = uuidv4();
            const MEMORIZE = stringify(noteArray);
            localStorage.setItem(UUID,noteArray);
        }
    }
}

export class RetrieveMemory {
    static retrieveItem(UUID) {
        if (typeof UUID === 'string') {
            localStorage.getItem(UUID);
        }
    }
}