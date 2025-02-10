import { v4 as uuidv4 } from 'uuid';
import { CreateElement } from './ElementGenerator';

export class Note {
    constructor(title,date,content,workspace) {
        if (typeof title === 'string' || typeof date === 'string' || typeof content === 'string' || typeof workspace === 'string') {
            this.title = title;
            this.date = date;
            this.content = content;
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

    generateNoteToUi(parent) {
        const card = new CreateElement('article')
            .addClass('noteSquare')
            .addClass('grid')
            .addId(this.uuid);
        const main = new CreateElement('main')
            .addClass('cardNoteContent')
            .html(`
                <p>${this.content}</p>
                `)
            .append(card);
        const header = new CreateElement('header')
            .addClass('cardTitle')
            .addClass('flexColumn')
            .html(`
                <h1>${this.title}</h1>
                <small>${this.date}</small>
                `)
            .append(card);
        const footer = new CreateElement('footer')
            .addClass('cardNoteButtons')
            .addClass('flexRow')
            .html(`
            <button type="button" id="removal">Remove!</button>
            <button type="button" id="complete">Done!</button>
            `)
            .append(card);
        card.append(parent);
    }
}