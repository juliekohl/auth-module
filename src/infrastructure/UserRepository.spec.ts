import { UserRepository } from './UserRepository';

describe('UserRepository', () => {
    let userRepository: UserRepository;

    beforeAll(() => {
        userRepository = new UserRepository();
    });

    it('should create a user', async () => {
        const userData = {
            name: 'John Doe',
            email: 'johnDoe1@example.com',
            password: 'password123',
        };

        const user = await userRepository.create(userData);

        expect(user).toBeDefined();
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
    });
});
