import { NoteGenerator } from "./noteGenerator";
import { CreateElement } from "./ElementGenerator";
import { createElement } from "@fullcalendar/core/preact.js";
import { Memorize,RetrieveMemory } from "./storageLogic";

export class modalManager {
    static modalOpen(dialog) {
        if (dialog){
            dialog.showModal()
        } else {
            console.error('dialog ID invalid')
        }
    }

    static modalClose(dialog,recentNotesId) {
        if (dialog) {
            dialog.close()
        } else {
            console.error('dialog ID invalid')
        }
    }
};

export class ListenerType {
    static noteMenu(source) {
        source.addEventListener('click', () => {
            const _NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalOpen(_NOTEDIALOG);
        })
    }

    static dialogCloser(source,recentNotesId) {
        source.addEventListener('click', () => {
            const _NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalClose(_NOTEDIALOG);
            Appender.recentNotes(recentNotesId);            
        })
    }
}

export function getInput(button) {
    function noteGenerationListener(submitButton) {
        submitButton.addEventListener('click', () => {
            const DATA = setContent(); //Stores the values inserted in the dialog to memorize and push them to the UI
            Memorize.memorizeNote(DATA)
        })

        function setContent() {
            let _title = document.querySelector('#noteTitle').value;
            let _date = document.querySelector('#date').value;
            let _content = document.querySelector('#content').value;
            const NOTE = new NoteGenerator(_title,_content,_date);
            if (!NOTE.folder) {
                NOTE.folder = 'default'; //if there is no specified folder, set the folder as default and then return the NOTE objects.
            };
            return NOTE
        }
    };

    function instance() {
        noteGenerationListener(button)
    }

    instance()
}

export class Appender {
    //this method will take all elements from memory and then show them on the recent notes.
    static recentNotes(display) {
        const memorizedNoted = RetrieveMemory.retrieveAllItems();
        for (let note of memorizedNoted) {
            const parentUl = new CreateElement('li')
                .addId(note.UUID)
                const element = new CreateElement('div')
                    .addClass(['innerNote'])
                    .addClass(['flex'])
                    .addId(note.UUID)
                    .html(`<p>${note.title}</p><p>${note.date}</p>`)
                    .appendElement(parentUl._buildable)
            parentUl.appendElement(display)
            console.log(element,parentUl);
        }
    }

    static initialize(appendParent) {
        this.recentNotes(appendParent);
        console.log(`element appended to ${appendParent}`);
    }
}