/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DetailOrderReponseResultCustomModel } from '../../models/detail-order-reponse-result-custom-model';

export interface ApiOrderListDetailOrderGet$Json$Params {
  orderId?: number;
}

export function apiOrderListDetailOrderGet$Json(http: HttpClient, rootUrl: string, params?: ApiOrderListDetailOrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DetailOrderReponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiOrderListDetailOrderGet$Json.PATH, 'get');
  if (params) {
    rb.query('orderId', params.orderId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DetailOrderReponseResultCustomModel>;
    })
  );
}

apiOrderListDetailOrderGet$Json.PATH = '/api/Order/ListDetailOrder';
