import { CreateElement } from "./ElementGenerator";

export class DialogManager {
    static modalOpener(source,dialog) {
        if (typeof source === 'object') {
            source.addEventListener('click', () => {
                dialog.showModal();
                return
            })
        } else {
            return console.error(`${dialog} is not a valid object`);
        }
    }

    static dialogOpener(dialogName) {
        dialogName.showModal()
    }

    static dialogCloser(dialogName) {
        dialogName.close()
    }
}