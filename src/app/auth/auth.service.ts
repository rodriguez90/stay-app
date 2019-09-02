import {User} from "./user.model";
import {AuthData} from "./auth-data.model";


/**
 * Created by yopt on 02/07/2019.
 */
export class AuthService1 {
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    }

    logout() {
        this.user = null;
    }

    getUser() {
        return {...this.user};
    }

    isAuth(){
        return this.user != null;
    }

}