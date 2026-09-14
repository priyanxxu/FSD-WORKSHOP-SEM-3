# Student Records

A small student record manager built with Node.js built-in modules. It provides a simple web interface for adding students and viewing all saved records.

## Features

- Add a student with a name, roll number, course, and email address.
- View all saved student records in a table.
- Persist records to `students.json` without a database.
- Run with Node.js only; no external packages are required.

## Requirements

- Node.js 14 or newer

## Getting Started

Clone the repository and move into the project directory:

 ```bash
 git clone https://github.com/priyanxxu/FSDtest.git
 cd FSDtest
 ```

Start the server:

 ```bash
 npm start
 ```

Open [http://localhost:3000](http://localhost:3000) in a browser.

The server prints its address when it starts. Stop it with `Ctrl+C`.

## Usage

1. Open the home page to see the **Add a student** form.
2. Complete all four fields: student name, roll number, course, and email.
3. Submit the form. The new record is saved and you are redirected to the records page.
4. Use **View all student records** or **Add another student** to move between the two pages.

## Routes

 | Method | Path | Description |
 | --- | --- | --- |
 | `GET` | `/` | Displays the student entry form. |
 | `POST` | `/students` | Validates and saves a student record. |
 | `GET` | `/students` | Displays all saved student records. |

## Data Storage

Student records are stored as a JSON array in [`students.json`](students.json). The file is read when records are displayed and updated after a successful form submission.

If the file does not exist, the server creates it automatically with an empty array:

 ```json
 []
 ```

## Project Structure

 ```text
 .
 ├── server.js       # HTTP server, routes, HTML views, and form handling
 ├── students.json   # Locally stored student records
 ├── package.json    # Project metadata and npm scripts
 └── README.md      # Project documentation
 ```

## Available Script

 | Command | Description |
 | --- | --- |
 | `npm start` | Starts the server on port `3000`. |

## Notes

This project is intended for learning and small local demonstrations. It uses synchronous file operations and does not include authentication, editing, deletion, or a production database.
