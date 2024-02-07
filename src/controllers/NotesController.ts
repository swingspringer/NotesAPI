import { Request, Response } from "express";
import { NotesService } from "../DB";
import { NotesHandler } from "../handlers";
import { Note } from "../@types";

class NotesController {
    static createNote(req: Request, res: Response): Response {
        const parsedNote = NotesHandler.mapRequestToNote(req)
        const createdNote = NotesService.insert(parsedNote)

        return res.status(201).json({ noteId: createdNote.noteId })
    };

    static getNotes(req: Request, res: Response): Response {
        const notes = NotesService.getAll()
        return res.json(notes)
    };

    static getNote(req: Request, res: Response): Response {
        const id: number = NotesHandler.getIdFromParam(req)

        const foundNote: Note | undefined = NotesService.findById(id)
        
        if(!foundNote)
            return res.status(404).json()

        return res.json(foundNote)
    };

    static updateNote(req: Request, res: Response): Response {
        const id: number = NotesHandler.getIdFromParam(req)
        const parsedNote = NotesHandler.mapRequestToNote(req)

        try {
            NotesService.updateNote(id, parsedNote)
            return res.status(204).json()
        }catch(e) {
            return res.status(404).json()
        }        
    };

    static deleteNote(req: Request, res: Response): Response {
        const id: number = NotesHandler.getIdFromParam(req)
        try {
            NotesService.deleteNote(id)
            return res.status(204).json()
        }catch(e) {
            return res.status(404).json()
        }    
        return res.json()
    };

}

export default NotesController