/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanResultCustomModel } from '../../models/boolean-result-custom-model';
import { CreateOrderRequest } from '../../models/create-order-request';

export interface ApiOrderCreatePost$Json$Params {
      body?: CreateOrderRequest
}

export function apiOrderCreatePost$Json(http: HttpClient, rootUrl: string, params?: ApiOrderCreatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiOrderCreatePost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiOrderCreatePost$Json.PATH = '/api/Order/Create';
