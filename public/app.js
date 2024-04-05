function createNote(text) {
  let newNote = document.createElement("li");
  newNote.classList.add("note");
  newNote.textContent = text;
  return newNote;
}

function addNote(notes, newNote) {
  notes.append(newNote);
}

function submitNoteForm(e) {
  e.preventDefault();
  let noteDescription = document.getElementById("noteDescription").value;
  let notes = document.getElementById("notes");
  let newNote = createNote(noteDescription);
  addNote(notes, newNote);
}

exports.createNote = createNote;
exports.addNote = addNote;
exports.submitNoteForm = submitNoteForm;
