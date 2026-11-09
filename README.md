# SkillPilots - Note Form Validation

A small beginner-friendly project based on the task shown in the supplied screenshot.

## Features
- Handles the form's `submit` event with JavaScript.
- Checks that the note title and content are not empty.
- Prevents submission and shows red custom error messages when fields are empty.
- On valid input, optionally sends a JSON `POST` request.
- Clears the form and validation messages after a successful addition.
- Shows added notes locally when no backend URL is configured.

## Run the project
1. Extract the ZIP file.
2. Open the `skillpilots_note_validation` folder.
3. Double-click `index.html`, or open it in Chrome.
4. Try submitting the form with empty fields to see validation.
5. Enter a title and content, then click **Add note**.

## Connect your backend
Open `script.js` and replace the empty `API_URL` value with your real note-creation endpoint. The endpoint should accept a JSON body with `title` and `content`.

This is a standalone sample implementation. It is not the original SkillPilots website source code, and its demo mode stores notes only in the current page session.
