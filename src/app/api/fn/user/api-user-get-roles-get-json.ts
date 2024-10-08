/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleListResultCustomModel } from '../../models/role-list-result-custom-model';

export interface ApiUserGetRolesGet$Json$Params {
}

export function apiUserGetRolesGet$Json(http: HttpClient, rootUrl: string, params?: ApiUserGetRolesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleListResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetRolesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleListResultCustomModel>;
    })
  );
}

apiUserGetRolesGet$Json.PATH = '/api/User/GetRoles';
