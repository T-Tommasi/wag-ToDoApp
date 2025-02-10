export class CreateElement {
    constructor(elementType) {
        this._buildable = document.createElement(elementType);
    };

    addClass(...classNames) {
        for (let element of classNames) {
            this._buildable.classList.add(element)
        }
        return this
    };

    addId(id) {
        this._buildable.setAttribute('id', id)
        return this
    };

    content(content) {
        this._buildable.textContent = content
        return this
    }

    appendElement(parent) {
        parent.appendChild(this._buildable);
        console.log(`${this._buildable.classList} appended to ${parent}`)
    };

    removeElement(element) {
        element.remove();
        return this;
    };

    html(htmlContent) {
        this._buildable.innerHTML = htmlContent;
        return this;
    };
}