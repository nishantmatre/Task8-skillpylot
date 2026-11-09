const form = document.getElementById("note-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const titleError = document.getElementById("title-error");
const contentError = document.getElementById("content-error");
const formError = document.getElementById("form-error");
const successMessage = document.getElementById("success-message");
const notesList = document.getElementById("notes-list");

form.addEventListener("submit", async (event) => {
  // Step 1: Handle the form submit event.
  event.preventDefault();

  // Clear old messages before validating again.
  titleError.textContent = "";
  contentError.textContent = "";
  formError.textContent = "";
  successMessage.textContent = "";

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  let isValid = true;

  // Step 2: Check that title and content are not empty.
  if (!title) {
    titleError.textContent = "Please enter a note title.";
    isValid = false;
  }
  if (!content) {
    contentError.textContent = "Please enter note content.";
    isValid = false;
  }
  if (!isValid) {
    formError.textContent = "Please correct the errors above.";
    return; // Stop submission when either field is empty.
  }

  // Step 3: Send a POST request when the fields are valid.
  // Replace this demo URL with your project's real backend endpoint.
  const API_URL = ""; // Example: "https://your-domain.com/api/notes"

  if (API_URL) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
      });
      if (!response.ok) throw new Error("The server could not save the note.");
    } catch (error) {
      formError.textContent = error.message || "Unable to save the note.";
      return;
    }
  }

  // Demo display: show the note locally if no API URL is configured.
  const emptyMessage = notesList.querySelector(".empty");
  if (emptyMessage) emptyMessage.remove();

  const card = document.createElement("article");
  card.className = "note-card";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = content;
  card.append(heading, paragraph);
  notesList.prepend(card);

  // Step 4: Reset the form and clear validation messages after success.
  form.reset();
  titleError.textContent = "";
  contentError.textContent = "";
  formError.textContent = "";
  successMessage.textContent = "Note added successfully!";
});
