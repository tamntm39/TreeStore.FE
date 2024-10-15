/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringResultCustomModel } from '../../models/string-result-custom-model';

export interface ApiCategoryDeactivateCategoryPost$Plain$Params {
      body?: number
}

export function apiCategoryDeactivateCategoryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCategoryDeactivateCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryDeactivateCategoryPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringResultCustomModel>;
    })
  );
}

apiCategoryDeactivateCategoryPost$Plain.PATH = '/api/Category/DeactivateCategory';
