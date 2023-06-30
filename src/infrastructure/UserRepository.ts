import { PrismaClient } from "@prisma/client";
import { User } from "../domain/User";
import bcrypt from "bcrypt";

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create({ name, email, password }: { name: string, email: string, password: string }): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 8);

        return await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
    }
}
