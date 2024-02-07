import 'dotenv/config';
import express, { Application, Router } from 'express';
import { NotesRoute } from './routes';

const port : Number = Number(process.env.PORT) || 8010;

const app : Application = express(); // Going simple with express() here instead of https since there's no need for key-cert SSL Certification
app.use(express.json());




// Put other routes below
app.use("/notes", new NotesRoute().router)


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
