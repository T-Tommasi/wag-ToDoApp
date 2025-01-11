export class modalManager {
    static modalOpen(dialog) {
        if (dialog){
            dialog.showModal()
        } else {
            console.error('dialog ID invalid')
        }
    }
};