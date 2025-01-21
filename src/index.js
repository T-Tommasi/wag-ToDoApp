import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import { ListenerType,modalManager,Appender,getInput } from './UiManager';

function appInstance()  {
    const NEWNOTESDISPLAY = document.querySelector('#recentNotes')
    
    function listeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        const SUBMITBUTTON = document.querySelector('#submitNote')
        getInput(SUBMITBUTTON);
        ListenerType.noteMenu(NOTEBUTTON);
        ListenerType.dialogCloser(SUBMITBUTTON,NEWNOTESDISPLAY);
    };

    function instanceLauncher() {
        listeners();
        Appender.initialize(NEWNOTESDISPLAY)
        calendarInstance
    };

    instanceLauncher()
}

appInstance()