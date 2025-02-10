import { v4 as uuidv4 } from 'uuid';
import { CreateElement } from './ElementGenerator';

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

    generateNoteUi(parent) {
        const header = CreateElement('header')
            .addClass('cardTitle')
            .addClass('flexColumn')
            .html(`
                <h1>${this.title}</h1>
                <small>${this.date}</small>
                `)
        const card = CreateElement('article')
            .addClass('noteSquare')
            .addClass('grid')
            .addId(this.uuid)

    }
}