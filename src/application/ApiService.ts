import { PrismaClient } from "@prisma/client";

export class ApiService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async register(data: { name: string, email: string, password: string }) {
        await this.prisma.user.create({ data });
    }
}
