import { NotesController } from "../controllers";
import { NoteValidator } from "../middleware";
import { BaseRouter } from "./BaseRouter";

class NotesRoute extends BaseRouter {
    routes(): void {
        this.router.post("/", NoteValidator, NotesController.createNote)
        this.router.get("/", NotesController.getNotes)
        this.router.get("/:id", NotesController.getNote)
        this.router.put("/:id", NoteValidator, NotesController.updateNote)
        this.router.delete("/:id", NotesController.deleteNote)
    }
}

export default NotesRoute