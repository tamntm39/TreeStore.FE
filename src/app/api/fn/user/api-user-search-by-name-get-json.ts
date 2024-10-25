/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponseListResultCustomModel } from '../../models/user-response-list-result-custom-model';

export interface ApiUserSearchByNameGet$Json$Params {
  name?: string;
}

export function apiUserSearchByNameGet$Json(http: HttpClient, rootUrl: string, params?: ApiUserSearchByNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiUserSearchByNameGet$Json.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserResponseListResultCustomModel>;
    })
  );
}

apiUserSearchByNameGet$Json.PATH = '/api/User/SearchByName';
