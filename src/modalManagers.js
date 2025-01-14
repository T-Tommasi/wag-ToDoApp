export class modalManager {
    static modalOpen(dialog) {
        if (dialog){
            dialog.showModal()
        } else {
            console.error('dialog ID invalid')
        }
    }

    static modalClose(dialog) {
        if (dialog) {
            dialog.close()
        } else {
            console.error('dialog ID invalid')
        }
    }
};