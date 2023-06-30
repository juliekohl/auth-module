import {ApiService} from "../../../src/application/ApiService";
import {PrismaClient} from "@prisma/client";

describe('ApiService', () => {
    const apiService = new ApiService();

    beforeEach(async () => {
        await (new PrismaClient()).$executeRawUnsafe(`DELETE FROM User;`);
    })

    it('should create a user', async () => {
        const data = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password',
        };

        const response = await apiService.register(data);

        expect(response).toEqual(expect.objectContaining({
            name: data.name,
            email: data.email,
        }));
    })

    it('should not create a user given duplicated email', async () => {
        await apiService.register({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password',
        });

        const data = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password',
        };

        const response = await apiService.register(data);

        expect(response).toStrictEqual({
            "message": "Email already registered",
        });
    });
});
