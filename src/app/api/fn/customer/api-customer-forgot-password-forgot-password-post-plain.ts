/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringResultCustomModel } from '../../models/string-result-custom-model';

export interface ApiCustomerForgotPasswordForgotPasswordPost$Plain$Params {
  email?: string;
}

export function apiCustomerForgotPasswordForgotPasswordPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerForgotPasswordForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerForgotPasswordForgotPasswordPost$Plain.PATH, 'post');
  if (params) {
    rb.query('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringResultCustomModel>;
    })
  );
}

apiCustomerForgotPasswordForgotPasswordPost$Plain.PATH = '/api/Customer/ForgotPassword/ForgotPassword';
