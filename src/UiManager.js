import { NoteGenerator } from "./note";
import { CreateElement } from "./ElementGenerator";

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
            const NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalOpen(NOTEDIALOG);
        })
    }

    static dialogCloser(source) {
        source.addEventListener('click', () => {
            const NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalClose(NOTEDIALOG);
        })
    }
}

export function noteInputs() {
    function noteGenerationListener() {
        let title = document.querySelector.content('#noteTitle');
        let date = document.querySelector.content('#date');
        let content = document.querySelector.content('#content');
    };

    function defaultNoteFolder(title,date,content,folder) {
        const NOTE = new NoteGenerator(title,content,date,folder);
        if (folder === '' || folder === 'default') {
            NOTE.folder = 'default'
        }
    }
}