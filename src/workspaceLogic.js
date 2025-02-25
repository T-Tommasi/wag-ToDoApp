import { CreateElement } from "./ElementGenerator";
import { Note } from "./NoteLogic";
import { v4 as uuidv4 } from "uuid";
import { retrieveFromMemory } from "./NoteLogic";

export class Workspace {
	constructor(name, notes, UUID) {
		this.name = name;
		this.content = [...notes];
		this.hidden = true;
		if (!UUID) {
			this.UUID = uuidv4; //usefull to uniquely identify a label and dinamically creating it's listener
		} else {
			this.UUID = UUID;
		}
	}

	generateLabelToUi(parent, noteContainer) {
		const element = new CreateElement("li")
			.content(`${this.name}`)
			.addId(`${this.UUID}`)
			.append(parent);
	}

	static generateListener(elementID) {
		if (typeof elementID != "string") {
			console.error("wrong element type for listener generation");
			return;
		}
		const element = document.querySelector(`#${elementID}`); //make sure element is a valid ID!
		element.addEventListener("click", () => {
			this.activate(noteContainer);
			this.retrieveCorelatedNotes(noteContainer);
		}); //adds a dynamic listener to newly created workspaces to import previously selected notes, note selection still WIP
	}

	saveToMemory() {
		const memory = JSON.stringify(this);
		localStorage.setItem(this.UUID, this);
	}

	static retrieveFromMemory(uuid, parseTarget) {
		const elementRaw = JSON.parse(localStorage.get(uuid));
		const element = new Workspace(
			elementRaw.name,
			elementRaw.content,
			elementRaw.UUID
		);
		element.generateLabelToUi(parseTarget);
	}

	retrieveCorelatedNotes(parent) {
		const keys = retrieveFromMemory();
		if (!memory) {
			console.error("Warning - memory is empty");
		} else {
			for (let key of keys) {
				const item = Note.retrieveFromMemory(key);
				if (item.container === this.name) {
					item.generateNoteToUi(parent);
				} else {
					continue;
				}
			}
		}
	}

	hideWorkspace(container) {
		if (typeof container != object && this.hidden === true) {
			console.error("Container type not supported or already hidden");
		} else {
			container.innerHTML = "";
			this.hidden = true;
			console.log(`${container} has been cleaned`);
			console.log("----");
			container.classList.remove("active");
		}
	}

	activate(noteContainer) {
		if (typeof container != object && this.hidden === false) {
			console.error(
				"Container type not supported or element already displayed"
			);
		} else {
			noteContainer.classList.add("active");
			const activeWorkspace = this.UUID;
			this.hidden = false;
			noteContainer.innerHTML = "";
		}
	}
}
