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

import { apiUserListUserGet$Json } from '../fn/user/api-user-list-user-get-json';
import { ApiUserListUserGet$Json$Params } from '../fn/user/api-user-list-user-get-json';
import { apiUserListUserGet$Plain } from '../fn/user/api-user-list-user-get-plain';
import { ApiUserListUserGet$Plain$Params } from '../fn/user/api-user-list-user-get-plain';
import { updateUserPut$Json } from '../fn/user/update-user-put-json';
import { UpdateUserPut$Json$Params } from '../fn/user/update-user-put-json';
import { updateUserPut$Plain } from '../fn/user/update-user-put-plain';
import { UpdateUserPut$Plain$Params } from '../fn/user/update-user-put-plain';
import { UserListResultCustomModel } from '../models/user-list-result-custom-model';
import { UserResultCustomModel } from '../models/user-result-custom-model';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserListUserGet()` */
  static readonly ApiUserListUserGetPath = '/api/User/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain$Response(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserListResultCustomModel>> {
    return apiUserListUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<UserListResultCustomModel> {
    return this.apiUserListUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserListResultCustomModel>): UserListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json$Response(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserListResultCustomModel>> {
    return apiUserListUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<UserListResultCustomModel> {
    return this.apiUserListUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserListResultCustomModel>): UserListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `updateUserPut()` */
  static readonly UpdateUserPutPath = '/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPut$Plain$Response(params?: UpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResultCustomModel>> {
    return updateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPut$Plain(params?: UpdateUserPut$Plain$Params, context?: HttpContext): Observable<UserResultCustomModel> {
    return this.updateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>): UserResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPut$Json$Response(params?: UpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResultCustomModel>> {
    return updateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPut$Json(params?: UpdateUserPut$Json$Params, context?: HttpContext): Observable<UserResultCustomModel> {
    return this.updateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>): UserResultCustomModel => r.body)
    );
  }

}