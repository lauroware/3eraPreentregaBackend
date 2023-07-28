import { CreateUserDto, GetUserDto } from "../Dao/dto/user.dto.js";

export class UserRepository{
    
    constructor(dao){
        this.dao = dao;
    }

    async getUsers(){
        const users = await this.dao.get()
        return users;
    }

    async createUser(user){
        const userDto = new CreateUserDto(user)
        const userCreated = await this.dao.post(userDto);
        return userCreated;
    }
    
}