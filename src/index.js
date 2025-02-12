import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DialogManager } from './UIManager';
import { Note } from './NoteLogic';

function appInstance() {
    const NEWNOTEBTN = document.querySelector('#addNoteBtn');
    const NEWNOTEDLG = document.querySelector('#newNote');
    const RESETNOTEBTN = document.querySelector('#reset');
    const SUBMITNOTEBTN = document.querySelector('#submitNoteBtn');
    let activeWorkspace = document.querySelector('#activeWorkspace')

    function _listeners() {
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