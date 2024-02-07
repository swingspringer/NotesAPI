import { Note } from "../@types/models";
import { INotesService } from "../@types";

/**
 * Implementation for NotesService
 * 
 * Can be replaced with a different approach. This is to make things simple per challenge instructions
 * 
 */
class NotesService implements INotesService {
    private memory: Database = {}; // Will be a dictionary approach
    private id_sequence: number = 1;

    private getNextId = () => this.id_sequence++

    insert(note: Note): Note {
        const newId = this.getNextId()
        note.noteId = newId

        this.memory[newId] = note
        
        return note
    }

    getAll(): Note[] {
        const keys: string[] = Object.keys(this.memory)
        return keys.map(key => this.memory[Number(key)])
    }

    findById(id: number): Note | undefined {
        if(!this.memory[id]) {
            return undefined
        }
        
        return this.memory[id]
    }

    updateNote(id: number, note: Note): void {
        if(!this.memory[id]) {
            throw new Error("Note does not exist")
        }

        this.memory[id] = {
            noteId: id,
            note: note.note
        }
    }

    deleteNote(id: number): void {
        if(!this.memory[id]) {
            throw new Error("Note does not exist")
        }

        delete this.memory[id]
    }
}

export default NotesService