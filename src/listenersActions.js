import { modalManager } from "./modalManagers";

export default class ListenerType {
    static noteMenu(source) {
        source.addEventListener('click', () => {
            const NOTEDIALOG = document.querySelector('.noteMenu');
            modalManager.modalOpen(NOTEDIALOG);
        })
    }
}