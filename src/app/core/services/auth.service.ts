// angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, from, Observable, of} from 'rxjs';

// liberias de tercero
import {fromPromise} from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';
import * as msRest from '@azure/ms-rest-js';
import {AuthJwtCreateResponse, JSONWebToken, Person, PersonCreateResponse} from '../../../../projects/Api/lib/models';
import * as jwt_decode from 'jwt-decode';

// app imports
import {JwtService} from '../../../../projects/fbs-core/src/lib/services';
import {createUser, User} from '../../../../projects/fbs-shared/src/lib/models';
import {AppConfig, AppConfigService} from '../../config';
import {Persona} from '../../shared/models';
import {Api, GenericOptionalParams} from './api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private resourceUrl = '';
    private userBehaviorSubject: BehaviorSubject<User>;
    public userObservable: Observable<User>;
    public loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();
    private authLogin = '';
    private authPasswordRestore = '';

    constructor(
        private http: HttpClient,
        private jwtService: JwtService,
        private configService: AppConfigService,
        private concordiaApi: Api
    ) {
        this.configService.config$.subscribe((config) => {
            if (config) {
                this.resourceUrl = `${config.apiBaseUrl}${config.apiVersionName}`;
                this.authLogin = config.urlEndPoints.authLogin;
                this.authPasswordRestore = config.urlEndPoints.authPasswordRestore;
            }
        });
        this.userBehaviorSubject = new BehaviorSubject<User>(null);
        this.userObservable = this.userBehaviorSubject.asObservable();

        //  const user = JSON.parse(localStorage.getItem('user'));
        // this.setCurrentUser(user);

        this.concordiaApi.disableCrentials();
    }

    public setCurrentUser(user: User) {
        console.log('Auth setCurrentUser', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.concordiaApi.token = user != null ? user.token : 'fake token';
        this.userBehaviorSubject.next(user);
    }

    public get currentUser(): User {
        return this.userBehaviorSubject.value;
    }

    login(username: string, password: string): Observable<User> {
        const parametros: JSONWebToken = {
            username: username,
            password: password,
        };

        return fromPromise(this.concordiaApi.concordiaApi.authJwt.create(parametros))
            .pipe(map((respuesta: AuthJwtCreateResponse) => {
                if (respuesta) {
                    console.log('AuthJwtCreateResponse', respuesta);
                    const modeloAutenticacion: any = JSON.parse(respuesta._response.bodyAsText);
                    console.log('Token', modeloAutenticacion.token);
                    const tokenPayload = jwt_decode(modeloAutenticacion.token);
                    console.log('tokenPayload', tokenPayload);
                    const user: User = createUser(
                        tokenPayload.user_id,
                        tokenPayload.username,
                        '',
                        tokenPayload.email,
                        true,
                        modeloAutenticacion.token);

                    return user;
                }
            }));
    }

    register(person: Person): Observable<Person> {

        return fromPromise(this.concordiaApi.concordiaApi.person.create(person))
            .pipe(map((response: PersonCreateResponse) => {
                console.log('response', response);
                console.log('response parsedBody', response._response.parsedBody);

                const personResult = JSON.parse(response._response.bodyAsText) as Person;
                return personResult;
            }));

    }

    logout(): Observable<User> {
        const user = this.userBehaviorSubject.value;
        localStorage.removeItem('userObservable');
        this.setCurrentUser(null);
        this.loggedInSubject.next(false);
        this.jwtService.destroyToken();

        return of(user);
    }

    passwordRestore(userEmail: string, appUrl: string): Observable<any> {
        return this.http.post(
            `${this.resourceUrl}/${this.authPasswordRestore}`,
            { correo: userEmail, url: appUrl });
    }

    hasToken(): boolean {
        return !!this.jwtService.getToken();
    }
}
