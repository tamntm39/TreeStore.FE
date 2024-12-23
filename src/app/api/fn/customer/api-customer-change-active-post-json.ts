/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanResultCustomModel } from '../../models/boolean-result-custom-model';

export interface ApiCustomerChangeActivePost$Json$Params {
  customerId?: number;
}

export function apiCustomerChangeActivePost$Json(http: HttpClient, rootUrl: string, params?: ApiCustomerChangeActivePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerChangeActivePost$Json.PATH, 'post');
  if (params) {
    rb.query('customerId', params.customerId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BooleanResultCustomModel>;
    })
  );
}

apiCustomerChangeActivePost$Json.PATH = '/api/Customer/ChangeActive';
