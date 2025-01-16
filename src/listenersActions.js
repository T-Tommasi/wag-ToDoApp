import { modalManager } from "./modalManagers";
import { NoteGenerator } from "./noteGenerator";

export default class ListenerType {
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

export class inputListener {
    noteGenerationListener() {
        let title = document.querySelector.content('#noteTitle');
        let date = document.querySelector.content('#date');
        let content = document.querySelector.content('#content');
    }

    defaultNoteFolder(title,date,content) {
        const NOTE = new NoteGenerator(title,content,date);
    }
}