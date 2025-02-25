import html from "./template.html";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DialogManager } from "./UIManager";
import { Note, retrieveFromMemory } from "./NoteLogic";
import { Workspace } from "./workspaceLogic";

function appInstance() {
	const NEWNOTEBTN = document.querySelector("#addNoteBtn");
	const NEWNOTEDLG = document.querySelector("#newNote");
	const RESETNOTEBTN = document.querySelector("#reset");
	const SUBMITNOTEBTN = document.querySelector("#submitNoteBtn");
	const CREATEWORKSPACEBTN = document.querySelector("#createNewWorkspaceBtn");
	const WORKSPACEDIALOG = document.querySelector("#newWorkspaceDialog");
	const WORKSPACESUBMITBTN = document.querySelector("#submitWorkspace");
	const WORKSPACERESETBTN = document.querySelector("#resetWorkspace");
	const WORKSPACELABELS = document.querySelector(".workspaceLabels");
	let activeWorkspace = document.querySelector("#activeWorkspace");

	function _listeners() {
		document.addEventListener("DOMContentLoaded", () => {
			const memorizedKeys = retrieveFromMemory.allKeys();
			for (let key of memorizedKeys) {
				console.log(key);
				const elementRaw = JSON.parse(localStorage.getItem(key));
				const element = new Note(
					elementRaw.title,
					elementRaw.date,
					elementRaw.content,
					elementRaw.workspace
				);
				element.generateNoteToUi(activeWorkspace);
			}
		});
		DialogManager.modalOpener(CREATEWORKSPACEBTN, WORKSPACEDIALOG);
		DialogManager.modalOpener(NEWNOTEBTN, NEWNOTEDLG);
		RESETNOTEBTN.addEventListener("click", () =>
			DialogManager.dialogCloser(NEWNOTEDLG)
		);
		SUBMITNOTEBTN.addEventListener("click", () => noteSubmitBtn(NEWNOTEDLG));
		WORKSPACERESETBTN.addEventListener("click", () =>
			DialogManager.dialogCloser(WORKSPACEDIALOG)
		);
		WORKSPACESUBMITBTN.addEventListener("click", () =>
			workspaceSubmitBtn(WORKSPACEDIALOG)
		);
	}

	function noteSubmitBtn(dialog) {
		console.log(dialog);
		const title = document.querySelector("#title").value;
		const date = document.querySelector("#date").value;
		const content = document.querySelector("#content").value;
		const workspace = document.querySelector("#workspace").value;
		if (!title || !date || !content) {
			console.error("not all inputs filled");
			alert("You must fill all the required inputs");
			return;
		} else {
			const note = new Note(title, date, content, workspace);
			console.log(note);
			note.storeToMemory();
			console.log(activeWorkspace);
			note.generateNoteToUi(activeWorkspace);
			dialog.close();
		}
	}

	function workspaceSubmitBtn(dialog) {
		const title = document.querySelector("#workspaceTitle").value;
		const content = document.querySelector("#workspaceContents").value;
		console.log({ content, title });
		if (!title || !content) {
			console.error("Title or content missing");
			alert("Please write all the required information!");
		} else {
			const WORKSPACE = new Workspace(title, content, UUID);
			console.log(WORKSPACE);
			WORKSPACE.generateLabelToUi(WORKSPACELABELS);
			Workspace.generateListener(WORKSPACE.title);
			dialog.close();
		}
	}

	function instancer() {
		_listeners();
	}

	instancer();
}

appInstance();
