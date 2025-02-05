import { stringify, v4 as uuidv4 } from 'uuid';

export class Note {
    constructor(title,date,content,workspace) {
        if (typeof title === 'string' || typeof date === 'string' || typeof content === 'string' || typeof workspace === 'string') {
            this.title = title;
            this.date = date;
            this.contet = content;
            this.uuid = uuidv4();
            if (!workspace) {
                this.workspace = 'main'
            } else {
                this.workspace = workspace
            };
        }
    }

    storeToMemory() {
        const _object = JSON.stringify(this)
        localStorage.setItem(this.uuid,_object);
    }
}