/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Int32ResultCustomModel } from '../../models/int-32-result-custom-model';

export interface ApiProductGetTotalProductsTotalProductsGet$Plain$Params {
}

export function apiProductGetTotalProductsTotalProductsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProductGetTotalProductsTotalProductsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductGetTotalProductsTotalProductsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Int32ResultCustomModel>;
    })
  );
}

apiProductGetTotalProductsTotalProductsGet$Plain.PATH = '/api/Product/GetTotalProducts/total-products';
