import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import { ListenerType,modalManager,Appender,getInput } from './UiManager';

function appInstance()  {
    
    function listeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        const SUBMITBUTTON = document.querySelector('#submitNote')
        getInput(SUBMITBUTTON);
        ListenerType.noteMenu(NOTEBUTTON);
        ListenerType.dialogCloser(SUBMITBUTTON);


    };

    function instanceLauncher() {
        listeners();
        calendarInstance
    };

    instanceLauncher()
}

appInstance()