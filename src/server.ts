import 'dotenv/config';
import express, { Application } from 'express';
import { routes } from './routes';

const port : Number = Number(process.env.PORT) || 8010;

const app : Application = express(); // Going simple with express() here instead of https since there's no need for key-cert SSL Certification
app.use(express.json());

app.use(routes)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});