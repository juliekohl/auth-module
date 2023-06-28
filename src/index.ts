import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! v1')
});

app.post('/register', async (req: Request, res: Response) => {
    try {
        const prisma = new PrismaClient();

        // create User
        const user = await prisma.user.create({
            data: {
                name: 'Cesar',
                email: 'cesar@prisma.io',
                password: 'password',
            },
        });
        console.log('user:', user);

        // retrieve all users records
        const users = await prisma.user.findMany();
        console.log('users:', users);

        res.send({
            message: 'Success',
        });

    } catch (err) {
        res.send({ message: err });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
