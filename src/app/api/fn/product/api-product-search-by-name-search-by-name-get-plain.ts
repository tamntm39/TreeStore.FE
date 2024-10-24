/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductListResultCustomModel } from '../../models/product-list-result-custom-model';

export interface ApiProductSearchByNameSearchByNameGet$Plain$Params {
  name?: string;
}

export function apiProductSearchByNameSearchByNameGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProductSearchByNameSearchByNameGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductSearchByNameSearchByNameGet$Plain.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductListResultCustomModel>;
    })
  );
}

apiProductSearchByNameSearchByNameGet$Plain.PATH = '/api/Product/SearchByName/SearchByName';
