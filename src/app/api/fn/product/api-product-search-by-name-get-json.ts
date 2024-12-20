/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetListProductSpResultListResultCustomModel } from '../../models/get-list-product-sp-result-list-result-custom-model';

export interface ApiProductSearchByNameGet$Json$Params {
  name?: string;
}

export function apiProductSearchByNameGet$Json(http: HttpClient, rootUrl: string, params?: ApiProductSearchByNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiProductSearchByNameGet$Json.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetListProductSpResultListResultCustomModel>;
    })
  );
}

apiProductSearchByNameGet$Json.PATH = '/api/Product/SearchByName';
