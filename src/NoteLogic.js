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
            .addId(this.uuid)
            .html(`
            <header class='cardTitle flexColumn'>
                <h1>${this.title}</h1>
                <small>${this.date}</small>
            </header>
            <main class='cardNoteContent'>
                <p>${this.content}</p>
            </main>
            <footer class='cardNoteButtons flexRow'>
                <button type="button" id="removal">Remove!</button>
                <button type="button" id="complete">Done!</button>
            </footer>
            `)
            .append(parent)
    }
}