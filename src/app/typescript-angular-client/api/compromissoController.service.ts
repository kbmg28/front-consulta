/**
 * API para marcação de consultas
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * Contact: kb.developer.br@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CompromissoBodyDto } from '../model/compromissoBodyDto';
import { ObjectResponse } from '../model/objectResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CompromissoControllerService {

    protected basePath = 'https://kbmg28-back.herokuapp.com/ws-consulta-medica';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * allByMedico
     * 
     * @param idMedico idMedico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allByMedicoUsingGET(idMedico: string, observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public allByMedicoUsingGET(idMedico: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public allByMedicoUsingGET(idMedico: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public allByMedicoUsingGET(idMedico: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idMedico === null || idMedico === undefined) {
            throw new Error('Required parameter idMedico was null or undefined when calling allByMedicoUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ObjectResponse>(`${this.basePath}/compromisso/allByMedico`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * allByPessoa
     * 
     * @param idPessoa idPessoa
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allByPessoaUsingGET(idPessoa: string, observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public allByPessoaUsingGET(idPessoa: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public allByPessoaUsingGET(idPessoa: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public allByPessoaUsingGET(idPessoa: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idPessoa === null || idPessoa === undefined) {
            throw new Error('Required parameter idPessoa was null or undefined when calling allByPessoaUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idPessoa !== undefined && idPessoa !== null) {
            queryParameters = queryParameters.set('idPessoa', <any>idPessoa);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ObjectResponse>(`${this.basePath}/compromisso/allByPessoa`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * create
     * 
     * @param compromisso compromisso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(compromisso: CompromissoBodyDto, observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public createUsingPOST(compromisso: CompromissoBodyDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public createUsingPOST(compromisso: CompromissoBodyDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public createUsingPOST(compromisso: CompromissoBodyDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (compromisso === null || compromisso === undefined) {
            throw new Error('Required parameter compromisso was null or undefined when calling createUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ObjectResponse>(`${this.basePath}/compromisso/create`,
            compromisso,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteById
     * 
     * @param idCompromisso idCompromisso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteByIdUsingDELETE(idCompromisso: string, observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public deleteByIdUsingDELETE(idCompromisso: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public deleteByIdUsingDELETE(idCompromisso: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public deleteByIdUsingDELETE(idCompromisso: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idCompromisso === null || idCompromisso === undefined) {
            throw new Error('Required parameter idCompromisso was null or undefined when calling deleteByIdUsingDELETE.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idCompromisso !== undefined && idCompromisso !== null) {
            queryParameters = queryParameters.set('idCompromisso', <any>idCompromisso);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<ObjectResponse>(`${this.basePath}/compromisso/deleteOne`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAll
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public findAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public findAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public findAllUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ObjectResponse>(`${this.basePath}/compromisso/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findOne
     * 
     * @param idCompromisso idCompromisso
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findOneUsingGET(idCompromisso: string, observe?: 'body', reportProgress?: boolean): Observable<ObjectResponse>;
    public findOneUsingGET(idCompromisso: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResponse>>;
    public findOneUsingGET(idCompromisso: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResponse>>;
    public findOneUsingGET(idCompromisso: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idCompromisso === null || idCompromisso === undefined) {
            throw new Error('Required parameter idCompromisso was null or undefined when calling findOneUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idCompromisso !== undefined && idCompromisso !== null) {
            queryParameters = queryParameters.set('idCompromisso', <any>idCompromisso);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ObjectResponse>(`${this.basePath}/compromisso`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}