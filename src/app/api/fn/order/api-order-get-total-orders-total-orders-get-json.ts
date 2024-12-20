/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Int32ResultCustomModel } from '../../models/int-32-result-custom-model';

export interface ApiOrderGetTotalOrdersTotalOrdersGet$Json$Params {
}

export function apiOrderGetTotalOrdersTotalOrdersGet$Json(http: HttpClient, rootUrl: string, params?: ApiOrderGetTotalOrdersTotalOrdersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiOrderGetTotalOrdersTotalOrdersGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Int32ResultCustomModel>;
    })
  );
}

apiOrderGetTotalOrdersTotalOrdersGet$Json.PATH = '/api/Order/GetTotalOrders/total-orders';
