import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bodyParser from 'body-parser';

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
        const prisma = new PrismaClient();
        const { name, email, password } = req.body;

        // create User
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Failed to create user', err });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
