/**
 * @jest-environment jsdom
 */

const { createNote, submitNoteForm, addNote } = require("../../public/app");

test("createNote", () => {
  let noteDescription = "Première note";

  expect(createNote(noteDescription).outerHTML).toBe(
    `<li class="note">${noteDescription}</li>`
  );
});

test("addNote", () => {
  //Créer un jeu de données
  let notes = document.createElement("ul");
  let newNote1 = document.createElement("li");
  newNote1.textContent = "test1";
  let newNote2 = document.createElement("li");
  newNote2.textContent = "test2";
  addNote(notes, newNote1);
  addNote(notes, newNote2);
  expect(notes.outerHTML).toBe("<ul><li>test1</li><li>test2</li></ul>");
});

test("submitNoteForm", () => {
  // On vient vérifier si une une page html est envoyée est bien intégrée
  document.body.innerHTML = `
    <form id="formNote">
      <textarea id="noteDescription" cols="30" rows="10">Prout</textarea>
      <button type="submit">Ajouter</button>
    </form>
    <ul id="notes"></ul>`;

  let formNote = document.getElementById("formNote");
  formNote.addEventListener("submit", submitNoteForm);
  formNote.submit();

  let notes = document.getElementById("notes");
  expect(notes.outerHTML).toBe(
    `<ul id="notes"><li class="note">Prout</li></ul>`
  );
});
