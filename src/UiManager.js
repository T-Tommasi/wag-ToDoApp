import { CreateElement } from "./ElementGenerator";

export class DialogManager {
    static modalOpener(dialog) {
        if (typeof dialog === 'object') {
            dialog.addEventListener('click', () => {
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