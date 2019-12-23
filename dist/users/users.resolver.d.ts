import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    hello(): Promise<string>;
    users(): Promise<import("./interfaces/user.interface").User[]>;
}
