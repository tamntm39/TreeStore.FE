/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryListResultCustomModel } from '../../models/category-list-result-custom-model';

export interface ApiCategoryGetAllGet$Plain$Params {
}

export function apiCategoryGetAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCategoryGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryGetAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryListResultCustomModel>;
    })
  );
}

apiCategoryGetAllGet$Plain.PATH = '/api/Category/GetAll';
