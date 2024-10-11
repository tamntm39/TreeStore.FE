/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanResultCustomModel } from '../../models/boolean-result-custom-model';
import { Product } from '../../models/product';

export interface ApiProductUpdatePut$Json$Params {
      body?: Product
}

export function apiProductUpdatePut$Json(http: HttpClient, rootUrl: string, params?: ApiProductUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductUpdatePut$Json.PATH, 'put');
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

apiProductUpdatePut$Json.PATH = '/api/Product/Update';