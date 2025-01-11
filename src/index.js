import html from './template.html';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { calendarInstance } from './calendarImporter';
import { NoteGenerator,Folder } from './noteGenerator';
import ListenerType from './listenersActions';

function appInstance()  {
    
    function listeners() {
        const NOTEBUTTON = document.querySelector('#newNote');
        ListenerType.noteMenu(NOTEBUTTON);
    };

    function instanceLauncher() {
        listeners();
        calendarInstance
    }

    instanceLauncher()
}

appInstance()