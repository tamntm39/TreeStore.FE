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

import { apiUserActivateAccountPost$Json } from '../fn/user/api-user-activate-account-post-json';
import { ApiUserActivateAccountPost$Json$Params } from '../fn/user/api-user-activate-account-post-json';
import { apiUserActivateAccountPost$Plain } from '../fn/user/api-user-activate-account-post-plain';
import { ApiUserActivateAccountPost$Plain$Params } from '../fn/user/api-user-activate-account-post-plain';
import { apiUserChangeActivePost$Json } from '../fn/user/api-user-change-active-post-json';
import { ApiUserChangeActivePost$Json$Params } from '../fn/user/api-user-change-active-post-json';
import { apiUserChangeActivePost$Plain } from '../fn/user/api-user-change-active-post-plain';
import { ApiUserChangeActivePost$Plain$Params } from '../fn/user/api-user-change-active-post-plain';
import { apiUserCreatePost$Json } from '../fn/user/api-user-create-post-json';
import { ApiUserCreatePost$Json$Params } from '../fn/user/api-user-create-post-json';
import { apiUserCreatePost$Plain } from '../fn/user/api-user-create-post-plain';
import { ApiUserCreatePost$Plain$Params } from '../fn/user/api-user-create-post-plain';
import { apiUserDeactivateAccountPost } from '../fn/user/api-user-deactivate-account-post';
import { ApiUserDeactivateAccountPost$Params } from '../fn/user/api-user-deactivate-account-post';
import { apiUserGetRolesGet$Json } from '../fn/user/api-user-get-roles-get-json';
import { ApiUserGetRolesGet$Json$Params } from '../fn/user/api-user-get-roles-get-json';
import { apiUserGetRolesGet$Plain } from '../fn/user/api-user-get-roles-get-plain';
import { ApiUserGetRolesGet$Plain$Params } from '../fn/user/api-user-get-roles-get-plain';
import { apiUserGetUserByIdGet$Json } from '../fn/user/api-user-get-user-by-id-get-json';
import { ApiUserGetUserByIdGet$Json$Params } from '../fn/user/api-user-get-user-by-id-get-json';
import { apiUserGetUserByIdGet$Plain } from '../fn/user/api-user-get-user-by-id-get-plain';
import { ApiUserGetUserByIdGet$Plain$Params } from '../fn/user/api-user-get-user-by-id-get-plain';
import { apiUserListUserGet$Json } from '../fn/user/api-user-list-user-get-json';
import { ApiUserListUserGet$Json$Params } from '../fn/user/api-user-list-user-get-json';
import { apiUserListUserGet$Plain } from '../fn/user/api-user-list-user-get-plain';
import { ApiUserListUserGet$Plain$Params } from '../fn/user/api-user-list-user-get-plain';
import { apiUserSearchByNameGet$Json } from '../fn/user/api-user-search-by-name-get-json';
import { ApiUserSearchByNameGet$Json$Params } from '../fn/user/api-user-search-by-name-get-json';
import { apiUserSearchByNameGet$Plain } from '../fn/user/api-user-search-by-name-get-plain';
import { ApiUserSearchByNameGet$Plain$Params } from '../fn/user/api-user-search-by-name-get-plain';
import { apiUserUpdateUserPut$Json } from '../fn/user/api-user-update-user-put-json';
import { ApiUserUpdateUserPut$Json$Params } from '../fn/user/api-user-update-user-put-json';
import { apiUserUpdateUserPut$Plain } from '../fn/user/api-user-update-user-put-plain';
import { ApiUserUpdateUserPut$Plain$Params } from '../fn/user/api-user-update-user-put-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { RoleListResultCustomModel } from '../models/role-list-result-custom-model';
import { StringResultCustomModel } from '../models/string-result-custom-model';
import { UpdateUserResponseListResultCustomModel } from '../models/update-user-response-list-result-custom-model';
import { UpdateUserResponseResultCustomModel } from '../models/update-user-response-result-custom-model';
import { UserResponseListResultCustomModel } from '../models/user-response-list-result-custom-model';
import { UserResponseResultCustomModel } from '../models/user-response-result-custom-model';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserCreatePost()` */
  static readonly ApiUserCreatePostPath = '/api/User/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreatePost$Plain$Response(params?: ApiUserCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiUserCreatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreatePost$Plain(params?: ApiUserCreatePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiUserCreatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreatePost$Json$Response(params?: ApiUserCreatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiUserCreatePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreatePost$Json(params?: ApiUserCreatePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiUserCreatePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserListUserGet()` */
  static readonly ApiUserListUserGetPath = '/api/User/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain$Response(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserResponseListResultCustomModel>> {
    return apiUserListUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain(params?: ApiUserListUserGet$Plain$Params, context?: HttpContext): Observable<UpdateUserResponseListResultCustomModel> {
    return this.apiUserListUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserResponseListResultCustomModel>): UpdateUserResponseListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json$Response(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserResponseListResultCustomModel>> {
    return apiUserListUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json(params?: ApiUserListUserGet$Json$Params, context?: HttpContext): Observable<UpdateUserResponseListResultCustomModel> {
    return this.apiUserListUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserResponseListResultCustomModel>): UpdateUserResponseListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserUpdateUserPut()` */
  static readonly ApiUserUpdateUserPutPath = '/api/User/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Plain$Response(params?: ApiUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserResponseResultCustomModel>> {
    return apiUserUpdateUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Plain(params?: ApiUserUpdateUserPut$Plain$Params, context?: HttpContext): Observable<UpdateUserResponseResultCustomModel> {
    return this.apiUserUpdateUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserResponseResultCustomModel>): UpdateUserResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Json$Response(params?: ApiUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserResponseResultCustomModel>> {
    return apiUserUpdateUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPut$Json(params?: ApiUserUpdateUserPut$Json$Params, context?: HttpContext): Observable<UpdateUserResponseResultCustomModel> {
    return this.apiUserUpdateUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserResponseResultCustomModel>): UpdateUserResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserDeactivateAccountPost()` */
  static readonly ApiUserDeactivateAccountPostPath = '/api/User/DeactivateAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeactivateAccountPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDeactivateAccountPost$Response(params?: ApiUserDeactivateAccountPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserDeactivateAccountPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeactivateAccountPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDeactivateAccountPost(params?: ApiUserDeactivateAccountPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserDeactivateAccountPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserActivateAccountPost()` */
  static readonly ApiUserActivateAccountPostPath = '/api/User/ActivateAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserActivateAccountPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserActivateAccountPost$Plain$Response(params?: ApiUserActivateAccountPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiUserActivateAccountPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserActivateAccountPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserActivateAccountPost$Plain(params?: ApiUserActivateAccountPost$Plain$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiUserActivateAccountPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserActivateAccountPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserActivateAccountPost$Json$Response(params?: ApiUserActivateAccountPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiUserActivateAccountPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserActivateAccountPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserActivateAccountPost$Json(params?: ApiUserActivateAccountPost$Json$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiUserActivateAccountPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserChangeActivePost()` */
  static readonly ApiUserChangeActivePostPath = '/api/User/ChangeActive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangeActivePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserChangeActivePost$Plain$Response(params?: ApiUserChangeActivePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiUserChangeActivePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangeActivePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserChangeActivePost$Plain(params?: ApiUserChangeActivePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiUserChangeActivePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangeActivePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserChangeActivePost$Json$Response(params?: ApiUserChangeActivePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiUserChangeActivePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangeActivePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserChangeActivePost$Json(params?: ApiUserChangeActivePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiUserChangeActivePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserGetUserByIdGet()` */
  static readonly ApiUserGetUserByIdGetPath = '/api/User/GetUserById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserByIdGet$Plain$Response(params?: ApiUserGetUserByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseResultCustomModel>> {
    return apiUserGetUserByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserByIdGet$Plain(params?: ApiUserGetUserByIdGet$Plain$Params, context?: HttpContext): Observable<UserResponseResultCustomModel> {
    return this.apiUserGetUserByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseResultCustomModel>): UserResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserByIdGet$Json$Response(params?: ApiUserGetUserByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseResultCustomModel>> {
    return apiUserGetUserByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserByIdGet$Json(params?: ApiUserGetUserByIdGet$Json$Params, context?: HttpContext): Observable<UserResponseResultCustomModel> {
    return this.apiUserGetUserByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseResultCustomModel>): UserResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserGetRolesGet()` */
  static readonly ApiUserGetRolesGetPath = '/api/User/GetRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Plain$Response(params?: ApiUserGetRolesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleListResultCustomModel>> {
    return apiUserGetRolesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Plain(params?: ApiUserGetRolesGet$Plain$Params, context?: HttpContext): Observable<RoleListResultCustomModel> {
    return this.apiUserGetRolesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleListResultCustomModel>): RoleListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Json$Response(params?: ApiUserGetRolesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleListResultCustomModel>> {
    return apiUserGetRolesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetRolesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Json(params?: ApiUserGetRolesGet$Json$Params, context?: HttpContext): Observable<RoleListResultCustomModel> {
    return this.apiUserGetRolesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleListResultCustomModel>): RoleListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiUserSearchByNameGet()` */
  static readonly ApiUserSearchByNameGetPath = '/api/User/SearchByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserSearchByNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserSearchByNameGet$Plain$Response(params?: ApiUserSearchByNameGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseListResultCustomModel>> {
    return apiUserSearchByNameGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserSearchByNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserSearchByNameGet$Plain(params?: ApiUserSearchByNameGet$Plain$Params, context?: HttpContext): Observable<UserResponseListResultCustomModel> {
    return this.apiUserSearchByNameGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseListResultCustomModel>): UserResponseListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserSearchByNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserSearchByNameGet$Json$Response(params?: ApiUserSearchByNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseListResultCustomModel>> {
    return apiUserSearchByNameGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserSearchByNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserSearchByNameGet$Json(params?: ApiUserSearchByNameGet$Json$Params, context?: HttpContext): Observable<UserResponseListResultCustomModel> {
    return this.apiUserSearchByNameGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseListResultCustomModel>): UserResponseListResultCustomModel => r.body)
    );
  }

}
