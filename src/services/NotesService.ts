import { Note } from "../../@types/models";
import { INotesService } from "../../@types";

/**
 * Implementation for NotesService
 * 
 * Can be replaced with a different approach. This is to make things simple per challenge instructions
 * 
 */
class NotesService implements INotesService {
    createNote = (note: Note): Note => {
        throw new Error("Function not implemented.");
    }

    getNotes = (id: Number | undefined): Note[] => {
        throw new Error("Function not implemented.");
    }

    updateNote = (note: Note): Note => {
        throw new Error("Function not implemented.");
    }

    deleteNote = (note: Note) => {
        throw new Error("Function not implemented.");
    }
}

export default NotesService