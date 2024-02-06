import { Request, Response } from "express";
import { Route } from "../Route";

export interface INotesController {
    createNote: Route;
    getNotes: Route;
    getNote: Route
    updateNote: Route;
    deleteNote: Route;
}