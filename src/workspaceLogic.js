import { CreateElement } from "./ElementGenerator";
import { Note } from "./NoteLogic";
import { v4 as uuidv4 } from 'uuid';
import { retrieveFromMemory } from "./NoteLogic";

export class Workspace {
    constructor(name, notes, ID) {
        this.name = name;
        this.content = [...notes];
        this.hidden = true;
        this.UUID = uuidv4;
        this.UILabel = ID;
    };

    generateLabelToUi(parent) {
        const element = new CreateElement('li')
            .content(`${this.name}`)
            .append(parent);
    }

    retrieveCorelatedNotes(parent) {
        const keys = retrieveFromMemory();
        if (!memory) {
            console.error('Warning - memory is empty');
        } else {
            for (let key of keys) {
                const item = Note.retrieveFromMemory(key);
                if (item.container === this.name) {
                    item.generateNoteToUi(parent);
                } else {
                    continue;
                };
            };
        };
    };

    hideWorkspace(container) {
        if (typeof container != object && this.hidden === true) {
            console.error('Container type not supported or already hidden');
        } else {
            container.innerHTML='';
            this.hidden = true;
            console.log(`${container} has been cleaned`);
            console.log('----');
            container.classList.remove('active')
        };
    };

    activate(noteContainer) {
        if (typeof container != object && this.hidden === false) {
            console.error('Container type not supported or element already displayed')
        } else {
            noteContainer.classList.add('active');
            const activeWorkspace = this.UUID;
            this.hidden = false;
            noteContainer.innerHTML = '';
        }
    }
}