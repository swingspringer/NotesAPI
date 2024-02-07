import { INotesService } from "../@types";
import NotesService from "./NotesService";

/**
 * It's always recommendable to use a proper DB implementation.
 * In case where this project will surface in the real world, 
 * you must change the implementation for NotesService, still 
 * implement the INotesService and simply replace the initialization
 * of the variable here.
 */
const notesService: INotesService = new NotesService();

export { notesService as NotesService }