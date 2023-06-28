import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            name: 'Julie',
            email: 'Julie@prisma.io',
            password: 'password',
        },
    });
    console.log('user:', user);

    // retrieve all users records
    const users = await prisma.user.findMany();
    console.log('users:', users);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
