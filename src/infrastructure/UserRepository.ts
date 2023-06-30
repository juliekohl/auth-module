import { PrismaClient } from "@prisma/client";
import { User } from "../domain/User";
import ErrorDefault from "../shared/exceptions/ErrorDefault";
import bcrypt from "bcrypt";

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create({ name, email, password }: { name: string, email: string, password: string }): Promise<Partial<User>|ErrorDefault> {
        try {
            const response = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password: await bcrypt.hash(password, 8),
                },
            });

            return {
                id: response.id,
                name: response.name,
                email: response.email,
            };
        } catch (e) {
            return {
                message: "Email already registered",
            }
        }
    }
}
