import {UserRepository} from "../infrastructure/UserRepository";
import {User} from "./User";
import ErrorDefault from "../shared/exceptions/ErrorDefault";

export class RegisterService {
    async register(data: { name: string, email: string, password: string }): Promise<Partial<User>|ErrorDefault> {
        return await (new UserRepository()).create(data);
    }
}
