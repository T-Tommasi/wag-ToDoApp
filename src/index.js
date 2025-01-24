import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import { ListenerType,Appender,getInput } from './UiManager';

function appInstance()  {
    const NEWNOTESDISPLAY = document.querySelector('#recentNotes')
    
    function listeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        const SUBMITBUTTON = document.querySelector('#submitNote');
        const NEWNOTESLISTENERS = document.querySelectorAll('.newNoteListenerGrabber');
        const NOTEDISPLAY = document.querySelector('#displayNewNote');
        getInput(SUBMITBUTTON);
        ListenerType.noteMenu(NOTEBUTTON);
        ListenerType.dialogCloser(SUBMITBUTTON,NEWNOTESDISPLAY);
        ListenerType.noteOpener(NEWNOTESLISTENERS,NOTEDISPLAY)
    };

    function instanceLauncher() {
        listeners();
        Appender.initialize(NEWNOTESDISPLAY)
        calendarInstance
    };

    instanceLauncher()
}

appInstance()