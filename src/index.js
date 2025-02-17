import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DialogManager } from './UIManager';
import { Note,retrieveFromMemory } from './NoteLogic';

function appInstance() {
    const NEWNOTEBTN = document.querySelector('#addNoteBtn');
    const NEWNOTEDLG = document.querySelector('#newNote');
    const RESETNOTEBTN = document.querySelector('#reset');
    const SUBMITNOTEBTN = document.querySelector('#submitNoteBtn');
    let activeWorkspace = document.querySelector('#activeWorkspace');

    function _listeners() {
        document.addEventListener('DOMContentLoaded', () => {
            const memorizedKeys = retrieveFromMemory.allKeys();
            for (let key of memorizedKeys) {
                console.log(key)
                const elementRaw = JSON.parse(localStorage.getItem(key));
                const element = new Note(elementRaw.title,elementRaw.date,elementRaw.content,elementRaw.workspace);
                element.generateNoteToUi(activeWorkspace);
            }
        })
        DialogManager.modalOpener(NEWNOTEBTN,NEWNOTEDLG);
        RESETNOTEBTN.addEventListener('click',() => DialogManager.dialogCloser(NEWNOTEDLG));
        SUBMITNOTEBTN.addEventListener('click',() => submitBtn(NEWNOTEDLG));
    };

    function submitBtn(dialog) {
        console.log(dialog);
        const title = document.querySelector('#title').value;
        const date = document.querySelector('#date').value;
        const content = document.querySelector('#content').value;
        const workspace = document.querySelector('#workspace').value;
        if (!title || !date || !content) {
            console.error('not all inputs filled');
            alert('You must fill all the required inputs');
            return;
        } else {
            const note = new Note(title,date,content,workspace);
            console.log(note);
            note.storeToMemory();
            console.log(activeWorkspace)
            note.generateNoteToUi(activeWorkspace);
            dialog.close();
        };
    };

    function instancer() {
        _listeners();
    };

    instancer();
};

appInstance();