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

import { apiCustomerActivateAccountPost$Json } from '../fn/customer/api-customer-activate-account-post-json';
import { ApiCustomerActivateAccountPost$Json$Params } from '../fn/customer/api-customer-activate-account-post-json';
import { apiCustomerActivateAccountPost$Plain } from '../fn/customer/api-customer-activate-account-post-plain';
import { ApiCustomerActivateAccountPost$Plain$Params } from '../fn/customer/api-customer-activate-account-post-plain';
import { apiCustomerChangeActivePost$Json } from '../fn/customer/api-customer-change-active-post-json';
import { ApiCustomerChangeActivePost$Json$Params } from '../fn/customer/api-customer-change-active-post-json';
import { apiCustomerChangeActivePost$Plain } from '../fn/customer/api-customer-change-active-post-plain';
import { ApiCustomerChangeActivePost$Plain$Params } from '../fn/customer/api-customer-change-active-post-plain';
import { apiCustomerDeactivateAccountPost } from '../fn/customer/api-customer-deactivate-account-post';
import { ApiCustomerDeactivateAccountPost$Params } from '../fn/customer/api-customer-deactivate-account-post';
import { apiCustomerForgotPasswordForgotPasswordPost$Json } from '../fn/customer/api-customer-forgot-password-forgot-password-post-json';
import { ApiCustomerForgotPasswordForgotPasswordPost$Json$Params } from '../fn/customer/api-customer-forgot-password-forgot-password-post-json';
import { apiCustomerForgotPasswordForgotPasswordPost$Plain } from '../fn/customer/api-customer-forgot-password-forgot-password-post-plain';
import { ApiCustomerForgotPasswordForgotPasswordPost$Plain$Params } from '../fn/customer/api-customer-forgot-password-forgot-password-post-plain';
import { apiCustomerGetCurrentCustomerIdGet$Json } from '../fn/customer/api-customer-get-current-customer-id-get-json';
import { ApiCustomerGetCurrentCustomerIdGet$Json$Params } from '../fn/customer/api-customer-get-current-customer-id-get-json';
import { apiCustomerGetCurrentCustomerIdGet$Plain } from '../fn/customer/api-customer-get-current-customer-id-get-plain';
import { ApiCustomerGetCurrentCustomerIdGet$Plain$Params } from '../fn/customer/api-customer-get-current-customer-id-get-plain';
import { apiCustomerGetCustomerByIdGet$Json } from '../fn/customer/api-customer-get-customer-by-id-get-json';
import { ApiCustomerGetCustomerByIdGet$Json$Params } from '../fn/customer/api-customer-get-customer-by-id-get-json';
import { apiCustomerGetCustomerByIdGet$Plain } from '../fn/customer/api-customer-get-customer-by-id-get-plain';
import { ApiCustomerGetCustomerByIdGet$Plain$Params } from '../fn/customer/api-customer-get-customer-by-id-get-plain';
import { apiCustomerGetTotalCustomersTotalCustomerGet$Json } from '../fn/customer/api-customer-get-total-customers-total-customer-get-json';
import { ApiCustomerGetTotalCustomersTotalCustomerGet$Json$Params } from '../fn/customer/api-customer-get-total-customers-total-customer-get-json';
import { apiCustomerGetTotalCustomersTotalCustomerGet$Plain } from '../fn/customer/api-customer-get-total-customers-total-customer-get-plain';
import { ApiCustomerGetTotalCustomersTotalCustomerGet$Plain$Params } from '../fn/customer/api-customer-get-total-customers-total-customer-get-plain';
import { apiCustomerListCustomerGet$Json } from '../fn/customer/api-customer-list-customer-get-json';
import { ApiCustomerListCustomerGet$Json$Params } from '../fn/customer/api-customer-list-customer-get-json';
import { apiCustomerListCustomerGet$Plain } from '../fn/customer/api-customer-list-customer-get-plain';
import { ApiCustomerListCustomerGet$Plain$Params } from '../fn/customer/api-customer-list-customer-get-plain';
import { apiCustomerLoginPost$Json } from '../fn/customer/api-customer-login-post-json';
import { ApiCustomerLoginPost$Json$Params } from '../fn/customer/api-customer-login-post-json';
import { apiCustomerLoginPost$Plain } from '../fn/customer/api-customer-login-post-plain';
import { ApiCustomerLoginPost$Plain$Params } from '../fn/customer/api-customer-login-post-plain';
import { apiCustomerLogoutPost } from '../fn/customer/api-customer-logout-post';
import { ApiCustomerLogoutPost$Params } from '../fn/customer/api-customer-logout-post';
import { apiCustomerRegisterPost$Json } from '../fn/customer/api-customer-register-post-json';
import { ApiCustomerRegisterPost$Json$Params } from '../fn/customer/api-customer-register-post-json';
import { apiCustomerRegisterPost$Plain } from '../fn/customer/api-customer-register-post-plain';
import { ApiCustomerRegisterPost$Plain$Params } from '../fn/customer/api-customer-register-post-plain';
import { apiCustomerResetPasswordResetPasswordPost$Json } from '../fn/customer/api-customer-reset-password-reset-password-post-json';
import { ApiCustomerResetPasswordResetPasswordPost$Json$Params } from '../fn/customer/api-customer-reset-password-reset-password-post-json';
import { apiCustomerResetPasswordResetPasswordPost$Plain } from '../fn/customer/api-customer-reset-password-reset-password-post-plain';
import { ApiCustomerResetPasswordResetPasswordPost$Plain$Params } from '../fn/customer/api-customer-reset-password-reset-password-post-plain';
import { apiCustomerSearchByNameGet } from '../fn/customer/api-customer-search-by-name-get';
import { ApiCustomerSearchByNameGet$Params } from '../fn/customer/api-customer-search-by-name-get';
import { apiCustomerUpdateCustomerPut$Json } from '../fn/customer/api-customer-update-customer-put-json';
import { ApiCustomerUpdateCustomerPut$Json$Params } from '../fn/customer/api-customer-update-customer-put-json';
import { apiCustomerUpdateCustomerPut$Plain } from '../fn/customer/api-customer-update-customer-put-plain';
import { ApiCustomerUpdateCustomerPut$Plain$Params } from '../fn/customer/api-customer-update-customer-put-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { CustomerResponseListResultCustomModel } from '../models/customer-response-list-result-custom-model';
import { CustomerResponseResultCustomModel } from '../models/customer-response-result-custom-model';
import { Int32ResultCustomModel } from '../models/int-32-result-custom-model';
import { StringResultCustomModel } from '../models/string-result-custom-model';

@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCustomerListCustomerGet()` */
  static readonly ApiCustomerListCustomerGetPath = '/api/Customer/ListCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Plain$Response(params?: ApiCustomerListCustomerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseListResultCustomModel>> {
    return apiCustomerListCustomerGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Plain(params?: ApiCustomerListCustomerGet$Plain$Params, context?: HttpContext): Observable<CustomerResponseListResultCustomModel> {
    return this.apiCustomerListCustomerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseListResultCustomModel>): CustomerResponseListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Json$Response(params?: ApiCustomerListCustomerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseListResultCustomModel>> {
    return apiCustomerListCustomerGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Json(params?: ApiCustomerListCustomerGet$Json$Params, context?: HttpContext): Observable<CustomerResponseListResultCustomModel> {
    return this.apiCustomerListCustomerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseListResultCustomModel>): CustomerResponseListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerGetCurrentCustomerIdGet()` */
  static readonly ApiCustomerGetCurrentCustomerIdGetPath = '/api/Customer/GetCurrentCustomerId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCurrentCustomerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCurrentCustomerIdGet$Plain$Response(params?: ApiCustomerGetCurrentCustomerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiCustomerGetCurrentCustomerIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCurrentCustomerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCurrentCustomerIdGet$Plain(params?: ApiCustomerGetCurrentCustomerIdGet$Plain$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiCustomerGetCurrentCustomerIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCurrentCustomerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCurrentCustomerIdGet$Json$Response(params?: ApiCustomerGetCurrentCustomerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiCustomerGetCurrentCustomerIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCurrentCustomerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCurrentCustomerIdGet$Json(params?: ApiCustomerGetCurrentCustomerIdGet$Json$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiCustomerGetCurrentCustomerIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerGetCustomerByIdGet()` */
  static readonly ApiCustomerGetCustomerByIdGetPath = '/api/Customer/GetCustomerById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCustomerByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerByIdGet$Plain$Response(params?: ApiCustomerGetCustomerByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerGetCustomerByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCustomerByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerByIdGet$Plain(params?: ApiCustomerGetCustomerByIdGet$Plain$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerGetCustomerByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCustomerByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerByIdGet$Json$Response(params?: ApiCustomerGetCustomerByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerGetCustomerByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCustomerByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerByIdGet$Json(params?: ApiCustomerGetCustomerByIdGet$Json$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerGetCustomerByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerUpdateCustomerPut()` */
  static readonly ApiCustomerUpdateCustomerPutPath = '/api/Customer/UpdateCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdateCustomerPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPut$Plain$Response(params?: ApiCustomerUpdateCustomerPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerUpdateCustomerPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPut$Plain(params?: ApiCustomerUpdateCustomerPut$Plain$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerUpdateCustomerPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdateCustomerPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPut$Json$Response(params?: ApiCustomerUpdateCustomerPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerUpdateCustomerPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPut$Json(params?: ApiCustomerUpdateCustomerPut$Json$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerUpdateCustomerPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerDeactivateAccountPost()` */
  static readonly ApiCustomerDeactivateAccountPostPath = '/api/Customer/DeactivateAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerDeactivateAccountPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeactivateAccountPost$Response(params?: ApiCustomerDeactivateAccountPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerDeactivateAccountPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerDeactivateAccountPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeactivateAccountPost(params?: ApiCustomerDeactivateAccountPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerDeactivateAccountPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerActivateAccountPost()` */
  static readonly ApiCustomerActivateAccountPostPath = '/api/Customer/ActivateAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivateAccountPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivateAccountPost$Plain$Response(params?: ApiCustomerActivateAccountPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerActivateAccountPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivateAccountPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivateAccountPost$Plain(params?: ApiCustomerActivateAccountPost$Plain$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerActivateAccountPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerActivateAccountPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivateAccountPost$Json$Response(params?: ApiCustomerActivateAccountPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerActivateAccountPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerActivateAccountPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerActivateAccountPost$Json(params?: ApiCustomerActivateAccountPost$Json$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerActivateAccountPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerChangeActivePost()` */
  static readonly ApiCustomerChangeActivePostPath = '/api/Customer/ChangeActive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerChangeActivePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerChangeActivePost$Plain$Response(params?: ApiCustomerChangeActivePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiCustomerChangeActivePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerChangeActivePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerChangeActivePost$Plain(params?: ApiCustomerChangeActivePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiCustomerChangeActivePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerChangeActivePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerChangeActivePost$Json$Response(params?: ApiCustomerChangeActivePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiCustomerChangeActivePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerChangeActivePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerChangeActivePost$Json(params?: ApiCustomerChangeActivePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiCustomerChangeActivePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerSearchByNameGet()` */
  static readonly ApiCustomerSearchByNameGetPath = '/api/Customer/SearchByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerSearchByNameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerSearchByNameGet$Response(params?: ApiCustomerSearchByNameGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerSearchByNameGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerSearchByNameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerSearchByNameGet(params?: ApiCustomerSearchByNameGet$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerSearchByNameGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerRegisterPost()` */
  static readonly ApiCustomerRegisterPostPath = '/api/Customer/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerRegisterPost$Plain$Response(params?: ApiCustomerRegisterPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerRegisterPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerRegisterPost$Plain(params?: ApiCustomerRegisterPost$Plain$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerRegisterPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerRegisterPost$Json$Response(params?: ApiCustomerRegisterPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerRegisterPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerRegisterPost$Json(params?: ApiCustomerRegisterPost$Json$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerRegisterPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerLoginPost()` */
  static readonly ApiCustomerLoginPostPath = '/api/Customer/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerLoginPost$Plain$Response(params?: ApiCustomerLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerLoginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerLoginPost$Plain(params?: ApiCustomerLoginPost$Plain$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerLoginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerLoginPost$Json$Response(params?: ApiCustomerLoginPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResponseResultCustomModel>> {
    return apiCustomerLoginPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerLoginPost$Json(params?: ApiCustomerLoginPost$Json$Params, context?: HttpContext): Observable<CustomerResponseResultCustomModel> {
    return this.apiCustomerLoginPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerResponseResultCustomModel>): CustomerResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerLogoutPost()` */
  static readonly ApiCustomerLogoutPostPath = '/api/Customer/Logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerLogoutPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerLogoutPost$Response(params?: ApiCustomerLogoutPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerLogoutPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerLogoutPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerLogoutPost(params?: ApiCustomerLogoutPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerLogoutPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerForgotPasswordForgotPasswordPost()` */
  static readonly ApiCustomerForgotPasswordForgotPasswordPostPath = '/api/Customer/ForgotPassword/ForgotPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerForgotPasswordForgotPasswordPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerForgotPasswordForgotPasswordPost$Plain$Response(params?: ApiCustomerForgotPasswordForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerForgotPasswordForgotPasswordPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerForgotPasswordForgotPasswordPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerForgotPasswordForgotPasswordPost$Plain(params?: ApiCustomerForgotPasswordForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerForgotPasswordForgotPasswordPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerForgotPasswordForgotPasswordPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerForgotPasswordForgotPasswordPost$Json$Response(params?: ApiCustomerForgotPasswordForgotPasswordPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerForgotPasswordForgotPasswordPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerForgotPasswordForgotPasswordPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerForgotPasswordForgotPasswordPost$Json(params?: ApiCustomerForgotPasswordForgotPasswordPost$Json$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerForgotPasswordForgotPasswordPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerResetPasswordResetPasswordPost()` */
  static readonly ApiCustomerResetPasswordResetPasswordPostPath = '/api/Customer/ResetPassword/ResetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerResetPasswordResetPasswordPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerResetPasswordResetPasswordPost$Plain$Response(params?: ApiCustomerResetPasswordResetPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerResetPasswordResetPasswordPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerResetPasswordResetPasswordPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerResetPasswordResetPasswordPost$Plain(params?: ApiCustomerResetPasswordResetPasswordPost$Plain$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerResetPasswordResetPasswordPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerResetPasswordResetPasswordPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerResetPasswordResetPasswordPost$Json$Response(params?: ApiCustomerResetPasswordResetPasswordPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
    return apiCustomerResetPasswordResetPasswordPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerResetPasswordResetPasswordPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerResetPasswordResetPasswordPost$Json(params?: ApiCustomerResetPasswordResetPasswordPost$Json$Params, context?: HttpContext): Observable<StringResultCustomModel> {
    return this.apiCustomerResetPasswordResetPasswordPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>): StringResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiCustomerGetTotalCustomersTotalCustomerGet()` */
  static readonly ApiCustomerGetTotalCustomersTotalCustomerGetPath = '/api/Customer/GetTotalCustomers/total-customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetTotalCustomersTotalCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetTotalCustomersTotalCustomerGet$Plain$Response(params?: ApiCustomerGetTotalCustomersTotalCustomerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiCustomerGetTotalCustomersTotalCustomerGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetTotalCustomersTotalCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetTotalCustomersTotalCustomerGet$Plain(params?: ApiCustomerGetTotalCustomersTotalCustomerGet$Plain$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiCustomerGetTotalCustomersTotalCustomerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetTotalCustomersTotalCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetTotalCustomersTotalCustomerGet$Json$Response(params?: ApiCustomerGetTotalCustomersTotalCustomerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiCustomerGetTotalCustomersTotalCustomerGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetTotalCustomersTotalCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetTotalCustomersTotalCustomerGet$Json(params?: ApiCustomerGetTotalCustomersTotalCustomerGet$Json$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiCustomerGetTotalCustomersTotalCustomerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

}
