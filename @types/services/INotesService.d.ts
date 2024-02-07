import { Note } from "../models"

export default interface INotesService {
    createNote: (note: Note) => Note;
    getNotes: (id: Number | undefined) => Note[];
    updateNote: (note: Note) => Note;
    deleteNote: (note: Note) => void;
}