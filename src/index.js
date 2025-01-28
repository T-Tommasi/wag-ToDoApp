import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import { ListenerType,Appender,getInput } from './UiManager';

function appInstance()  {
    const NEWNOTESDISPLAY = document.querySelector('#recentNotes')
    
    function buttonListeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        const SUBMITBUTTON = document.querySelector('#submitNote');
        getInput(SUBMITBUTTON);
        ListenerType.noteMenu(NOTEBUTTON);
        ListenerType.dialogCloser(SUBMITBUTTON,NEWNOTESDISPLAY);
    };

    function openNoteListener() {
        const NEWNOTESLISTENERS = document.querySelectorAll('.newNoteGrabber');
        const NOTEDISPLAY = document.querySelector('.taskContainer');
        ListenerType.noteOpener(NEWNOTESLISTENERS,NOTEDISPLAY)
    }

    function instanceLauncher() {
        buttonListeners();
        Appender.initialize(NEWNOTESDISPLAY)
        calendarInstance;
        openNoteListener();
    };

    instanceLauncher()
}

appInstance()