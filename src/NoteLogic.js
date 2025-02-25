import { v4 as uuidv4 } from "uuid";
import { CreateElement } from "./ElementGenerator";
import { createElement } from "@fullcalendar/core/preact.js";

export class Note {
	constructor(title, date, content, workspace) {
		if (
			typeof title === "string" ||
			typeof date === "string" ||
			typeof content === "string" ||
			typeof workspace === "string"
		) {
			this.title = title;
			this.date = date;
			this.content = content;
			this.uuid = uuidv4();
			if (!workspace) {
				this.workspace = "main";
			} else {
				this.workspace = workspace;
			}
		}
	}

	storeToMemory() {
		const _object = JSON.stringify(this);
		localStorage.setItem(this.uuid, _object);
	}

	static retrieveFromMemory(uuid) {
		const raw = JSON.parse(localStorage.getItem(uuid));
		const initialized = new Note(
			raw.title,
			raw.date,
			raw.content,
			raw.workspace
		);
		return initialized;
	}

	generateNoteToUi(parent) {
		const card = new CreateElement("article") //Set up a card to then append to the parent.
			.addClass("noteSquare")
			.addClass("grid")
			.addId(this.uuid);
		const header = new CreateElement("header")
			.addClass("cardTitle")
			.addClass("flexColumn")
			.append(card._buildable); //set up the header and append it to the card body
		const main = new CreateElement("main")
			.addClass("cardNoteContent")
			.append(card._buildable); //set up the main and append it to the card body
		const footer = new CreateElement("footer")
			.addClass("cardNoteButtons")
			.addClass("flexRow")
			.append(card._buildable); //sets up the footer and append it to the main card body
		//Elements to append to the various parts of the card
		//header elements

		const h1 = new CreateElement("h1")
			.content(this.title)
			.append(header._buildable);
		const small = new CreateElement("small")
			.content(this.date)
			.append(header._buildable);

		//main elements

		const p = new CreateElement("p")
			.content(this.content)
			.append(main._buildable);

		//footer elements

		const buttonRemove = new CreateElement("button")
			.addId("removal")
			.content("Remove!")
			.append(footer._buildable);
		const buttonAdd = new CreateElement("button")
			.addId("complete")
			.content("Done!")
			.append(footer._buildable);

		card.append(parent); //Appends the card to the DOM
	}
}

export class retrieveFromMemory {
	static allKeys() {
		const memory = Object.keys(localStorage);
		return memory;
	}
}
