import { userModel } from '../models/users.model.js';
import ManagerAccess from '../managers/ManagerAccess.js';

const managerAccess = new ManagerAccess();

export default class UserManager{

    constructor(){
        this.model = userModel;
    }

    async getUsers(){
        try {
            const result = await this.model.find();;
            return result;
        } catch (error) {
            console.log('Cannot get users in manager with mongoose: '+error)
        }
    }
    async createUser(user){
        try {
            const result = await this.model.create(user);
            return result;
        } catch (error) {
            console.log('Cannot post the user in manager with mongoose: '+error)     
        }
    }
}
