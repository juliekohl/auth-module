import {RegisterService} from "../domain/RegisterService";

export class ApiService {
    async register(data: { name: string, email: string, password: string }): Promise<void> {
        await (new RegisterService()).register(data);
    }
}
