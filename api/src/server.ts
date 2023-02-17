import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config();
import {Api} from "./Services/api";
import { Request, Response } from 'express';
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/api/posts/page/1');
});

app.get('/api/posts/page/:id', (req: Request, res: Response) => {
    Api.getPosts(req, res);
});

app.get('/api/post/:shortCode', (req: Request, res: Response) => {
    Api.getPost(req, res);
});
app.get('*', (req: Request, res: Response) => {
    res.status(404).send('Not found!');
});
app.listen(process.env.PORT, () => {
    console.log('Application started on port 5151!');
});