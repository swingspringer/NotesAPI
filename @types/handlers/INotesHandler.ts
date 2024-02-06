import { Request } from "express";
import { Note } from "../models";

export interface INotesHandler {
    handleCreateNote: (request: Request) => Note
}