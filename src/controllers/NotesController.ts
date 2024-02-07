import { Request, Response } from "express";

class NotesController {
    static createNote(req: Request, res: Response): Response {
        console.log("createNote")
        return res.json()
    };

    static getNotes(req: Request, res: Response): Response {
        console.log("getNotes")
        return res.json()
    };

    static getNote(req: Request, res: Response): Response {
        console.log("getNote")
        return res.json()
    };

    static updateNote(req: Request, res: Response): Response {
        console.log("updateNote")
        return res.json()
    };

    static deleteNote(req: Request, res: Response): Response {
        console.log("deleteNote")
        return res.json()
    };

}

export default NotesController