import { Request } from "express";
import { Note } from "../../@types";

class NotesHandler {
    handleCreateNote = (request: Request): Note => {
        const newNote : Note = {
            note: request.body.note
        }

        return newNote
    };

}

export default NotesHandler