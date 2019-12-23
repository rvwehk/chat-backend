import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
}
