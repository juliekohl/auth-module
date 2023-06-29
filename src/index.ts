import { Request, Response } from "express";
import * as bodyParser from 'body-parser';
import { ApiService } from "./application/ApiService";

const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.post('/register', async (req: Request, res: Response) => {
    try {
        await (new ApiService()).register({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json();
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user', err });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
