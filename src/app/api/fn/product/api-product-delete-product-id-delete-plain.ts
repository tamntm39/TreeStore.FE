/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanResultCustomModel } from '../../models/boolean-result-custom-model';

export interface ApiProductDeleteProductIdDelete$Plain$Params {
  productId: number;
}

export function apiProductDeleteProductIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiProductDeleteProductIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductDeleteProductIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BooleanResultCustomModel>;
    })
  );
}

apiProductDeleteProductIdDelete$Plain.PATH = '/api/Product/Delete/{productId}';
