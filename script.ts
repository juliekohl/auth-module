import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(name: string, email: string, password: string) {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    console.log('user:', user);
    return user;
}

async function main() {
    try {
        const user = await createUser('John Doe', 'john@example.com', 'password');
        console.log('User created:', user);

        // retrieve all users records
        const users = await prisma.user.findMany();
        console.log('users:', users);
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
