import NotesRoute from './NotesRoute'
import { Router } from 'express'

// Put other routes below
const routes = Router();

routes.use("/notes", new NotesRoute().router)

export { routes }