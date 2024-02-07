import { Note } from "../models"

export default interface INotesService {
    insert: (note: Note) => Note;
    getAll: () => Note[];
    findById: (id: number) => Note | undefined;
    updateNote: (id: number, note: Note) => void;
    deleteNote: (id: number) => void;
}