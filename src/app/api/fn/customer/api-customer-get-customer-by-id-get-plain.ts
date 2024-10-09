/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerResultCustomModel } from '../../models/customer-result-custom-model';

export interface ApiCustomerGetCustomerByIdGet$Plain$Params {
  customerId?: number;
}

export function apiCustomerGetCustomerByIdGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerGetCustomerByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerGetCustomerByIdGet$Plain.PATH, 'get');
  if (params) {
    rb.query('customerId', params.customerId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomerResultCustomModel>;
    })
  );
}

apiCustomerGetCustomerByIdGet$Plain.PATH = '/api/Customer/GetCustomerById';
