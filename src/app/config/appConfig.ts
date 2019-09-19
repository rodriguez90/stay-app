/**
 * Created by yopt on 05/09/2019.
 */

/*
export const CONFIG = {
    url: 'http://localhost:4200/',
    ip: '127.0.0.1',
    apiUrl: 'http://127.0.0.1:8000',
    urlEndPoints: {
        authLogin: 'api-rest-auth/login/',
        register: 'register',
    }
};*/



import {ConfigModel} from '../../../projects/fbs-core/src/lib/config';

export interface AppConfig extends ConfigModel {

    urlEndPoints?: {
        authLogin?: string,
        authLogout?: string,
        authPasswordRestore?: string,
        authRefreshToken?: string,
        persona?: string,
        usuario: string,
    };
}