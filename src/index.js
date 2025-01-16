import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import ListenerType from './listenersActions';

function appInstance()  {
    
    function listeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        const SUBMITBUTTON = document.querySelector('#submitNote')
        ListenerType.noteMenu(NOTEBUTTON);
        ListenerType.dialogCloser(SUBMITBUTTON);
    };

    function instanceLauncher() {
        listeners();
        calendarInstance
    }

    instanceLauncher()
}

appInstance()