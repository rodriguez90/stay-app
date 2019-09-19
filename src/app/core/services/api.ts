// angular imports
import { Injectable } from '@angular/core';
import {ServiceClientCredentials, TokenCredentials} from '@azure/ms-rest-js';

// lierias de terceros
import * as msRest from '@azure/ms-rest-js';

// api consola
import {ConcordiaApi, ConcordiaApiModels} from '../../../../projects/Api/lib/concordiaApi';

// app import
import {AppConfig, AppConfigService} from '../../config';

export interface GenericOptionalParams<T> extends msRest.RequestOptionsBase{
    modelo?: T;
    model?: T;
}

@Injectable({
    providedIn: 'root'
})
export class Api {
    optionsApi: ConcordiaApiModels.ConcordiaApiOptions = {};
    concordiaApi: ConcordiaApi;
    configuracion: AppConfig;
    serviceClientCredentials: TokenCredentials;

    constructor(private servicioConfiguracion: AppConfigService) {
        console.log('Api instance');
        this.serviceClientCredentials = new TokenCredentials('faketoken');

        this.servicioConfiguracion.config$.subscribe(config => {
            this.configuracion = config;
            this.optionsApi.requestPolicyFactories = [];
            this.optionsApi.baseUri = `${this.configuracion.apiBaseUrl}`;
            this.optionsApi.withCredentials = false;

            this.concordiaApi = new ConcordiaApi(this.serviceClientCredentials, this.optionsApi);
        });
    }

    set token(token: string) {
        // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
        // eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InJvb3QiLCJleHAiOjE1NjQ5Njk0NDQsImVt
        // YWlsIjoicm9vdEBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU2NDk2NTg0NH0.gr-1GNQj
        // 3EkHyYKNSvcZqlFPbAuEnRBk0Ghbgw9vn2M";
        this.serviceClientCredentials =  new TokenCredentials(token);
    }

    disableCrentials() {
        this.optionsApi.withCredentials = false;
        this.concordiaApi = new ConcordiaApi(this.serviceClientCredentials, this.optionsApi);
        console.log('disableCrentials: ',  this.optionsApi.withCredentials);
    }

    enableCredentials() {
        this.optionsApi.withCredentials = true;
        this.concordiaApi = new ConcordiaApi(this.serviceClientCredentials, this.optionsApi);
        console.log('enableCredentials: ',  this.optionsApi.withCredentials);
    }

}
