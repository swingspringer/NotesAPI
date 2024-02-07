import { Request } from "express";
import { Note } from "../@types";

class NotesHandler {

    static mapRequestToNote(request: Request): Note {
        const newNote: Note = {
            note: request.body.note
        }

        return newNote
    };

    static getIdFromParam(req: Request): number {
        return Number(req.params["id"])
    }

}

export default NotesHandler