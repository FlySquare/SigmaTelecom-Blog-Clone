import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config();
import {Api} from "./Services/api";
import { Request, Response } from 'express';
import request from "request";
const app = express();


app.get('/', (req: Request, res: Response) => {
    res.redirect('/posts/page/1');
});

app.get('/posts/page/:id', (req: Request, res: Response) => {
    Api.getPosts(req, res);
});

app.get('/post/:shortCode', (req: Request, res: Response) => {
    Api.getPost(req, res);
});
app.get('*', (req: Request, res: Response) => {
    res.status(404).send('Not found!');
});
app.listen(process.env.PORT, () => {
    console.log('Application started on port 5151!');
});