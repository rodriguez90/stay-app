
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {User} from '../models/user.model';
import {of} from "rxjs/index";


/**
 * Created by yopt on 02/07/2019.
 */
export class AuthService {
    private userActualSubject: BehaviorSubject<User>;
    public userActual: Observable<User>;

    private user: User;

    constructor() {
        this.userActualSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.userActual = this.userActualSubject.asObservable();
    }

    public setUserActual(user: User) {
        this.userActualSubject.next(user);
    }


    public get currentUserValue(): User {
        return this.userActualSubject.value;
    }

    login(username1: string, password1: string): Observable<User> {

        this.user = {
            username: username1,
            password: password1
        };

        this.setUserActual(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        return of(this.user);

    }

    logout() {
        this.user = null;
        const user = this.userActualSubject.value;
        this.setUserActual(null);
        console.log("Logout");
    }


}