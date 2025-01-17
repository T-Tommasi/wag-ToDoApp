import { NoteGenerator } from "./noteGenerator";
import { CreateElement } from "./ElementGenerator";
import { createElement } from "@fullcalendar/core/preact.js";

export class modalManager {
    static modalOpen(dialog) {
        if (dialog){
            dialog.showModal()
        } else {
            console.error('dialog ID invalid')
        }
    }

    static modalClose(dialog) {
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

    static dialogCloser(source) {
        source.addEventListener('click', () => {
            const _NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalClose(_NOTEDIALOG);
        })
    }
}

export function noteInputs() {
    function noteGenerationListener(submitButton) {
        submitButton.addEventListener('click', () => {
            const DATA = setContent(); //Stores the values inserted in the dialog to memorize and push them to the UI
        })

        function setContent() {
            let _title = document.querySelector('#noteTitle').value;
            let _date = document.querySelector('#date').value;
            let _content = document.querySelector('#content').value;
            const NOTE = new NoteGenerator(_title,_content,_date);
            if (!NOTE.folder) {
                NOTE.folder = 'default'; //if there is no specified folder, set the folder as default and then return the NOTE objects.
                return NOTE;
            } else {
                return NOTE;
            }
        }
    };
}