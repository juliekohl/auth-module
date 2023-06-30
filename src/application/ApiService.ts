import {RegisterService} from "../domain/RegisterService";
import {User} from "../domain/User";
import ErrorDefault from "../shared/exceptions/ErrorDefault";

export class ApiService {
    async register(data: { name: string, email: string, password: string }): Promise<Partial<User>|ErrorDefault> {
        return await (new RegisterService()).register(data);
    }
}
