import {UserRepository} from "../infrastructure/UserRepository";

export class RegisterService {
    async register(data: { name: string, email: string, password: string }): Promise<void> {
        await (new UserRepository()).create(data);
    }
}
