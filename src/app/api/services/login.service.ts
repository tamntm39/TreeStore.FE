/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { loginPost$Json } from '../fn/login/login-post-json';
import { LoginPost$Json$Params } from '../fn/login/login-post-json';
import { loginPost$Plain } from '../fn/login/login-post-plain';
import { LoginPost$Plain$Params } from '../fn/login/login-post-plain';
import { LoginResponseResultCustomModel } from '../models/login-response-result-custom-model';

@Injectable({ providedIn: 'root' })
export class LoginService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `loginPost()` */
  static readonly LoginPostPath = '/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain$Response(params?: LoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseResultCustomModel>> {
    return loginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain(params?: LoginPost$Plain$Params, context?: HttpContext): Observable<LoginResponseResultCustomModel> {
    return this.loginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponseResultCustomModel>): LoginResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Json$Response(params?: LoginPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseResultCustomModel>> {
    return loginPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Json(params?: LoginPost$Json$Params, context?: HttpContext): Observable<LoginResponseResultCustomModel> {
    return this.loginPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponseResultCustomModel>): LoginResponseResultCustomModel => r.body)
    );
  }

}
