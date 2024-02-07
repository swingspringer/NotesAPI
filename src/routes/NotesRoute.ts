import { NotesController } from "../controllers";
import { BaseRouter } from "./BaseRouter";

class NotesRoute extends BaseRouter {
    routes(): void {
        this.router.post("/", NotesController.createNote)
        this.router.get("/", NotesController.getNotes)
        this.router.get("/:id", NotesController.getNote)
        this.router.put("/:id", NotesController.updateNote)
        this.router.delete("/:id", NotesController.deleteNote)
    }
}

export default NotesRoute