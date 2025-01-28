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

    static noteOpener(sources,dialog) {
        for (let source of sources) {
            source.addEventListener('click', () => {
                const UUID = source.getAttribute('id').toString();
                const DATA = JSON.parse(RetrieveMemory.retrieveItem(UUID));
                Appender.displayNoteDialog(dialog,DATA);
            })
        }
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
            let _folder = document.querySelector('#folder').value;
            const NOTE = new NoteGenerator(_title,_content,_date,_folder);
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
        display.innerHTML = '';
        const memorizedNoted = RetrieveMemory.retrieveAllItems();
        for (let note of memorizedNoted) {
            const parentUl = new CreateElement('li')
                .addId(note.UUID)
                const element = new CreateElement('div')
                    .addClass(['innerNote'])
                    .addClass(['flex'])
                    .addClass(['newNoteGrabber'])
                    .addId(note.UUID)
                    .html(`
                        <p>${note.title}</p>
                        <p>${note.date}</p>
                        `)
                    .appendElement(parentUl._buildable);
            parentUl.appendElement(display)
            console.log(element,parentUl);
        }
    }

    static folders(display) {
        const _folders = RetrieveMemory.retrieveAllFolders()
        for (_folder of _folders) {
            const _appearance = new CreateElement('div')
                .addClass('flex')
                .addClass('flexCentral')
                .addId(`${_folder.UUID}`)
                .html(`
                <i class='fa-solid fa-folder fa-6x'></i>
                <h5>${_folder.folder}</h5>
                `)
                .appendElement(display);
            console.log(`appended ${_appearance}!`)
        }
    }

    static displayNoteDialog(dialog,noteObject) { //method for displaying the note onto a specific dialog
        dialog.innerHTML = ''
        let element = new CreateElement('div')
            .addClass(['displayedNotes'])
            .addId(`${noteObject.UUID}`)
            .html(`
                <h1>${noteObject.title}</h1>
                <p>${noteObject.date}</p>
                <main>${noteObject.content}</main>
                <footer class='noteFolder'>${noteObject.folder}</footer>
                `)
            .appendElement(dialog);
            console.log(`element ${element} appended!`)
    }

    static initialize(appendParent) {
        this.recentNotes(appendParent);
        console.log(`element appended to ${appendParent}`);
    }

    static cleanse(element) {
        element.innerHTML='';
        console.log('------')
        console.log(`${element} cleansed!`)
        console.log('------')
    }
}

