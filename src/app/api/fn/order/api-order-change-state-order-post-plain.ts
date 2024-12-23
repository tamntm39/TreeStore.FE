/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanResultCustomModel } from '../../models/boolean-result-custom-model';

export interface ApiOrderChangeStateOrderPost$Plain$Params {
  orderId?: number;
  stateId?: number;
}

export function apiOrderChangeStateOrderPost$Plain(http: HttpClient, rootUrl: string, params?: ApiOrderChangeStateOrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiOrderChangeStateOrderPost$Plain.PATH, 'post');
  if (params) {
    rb.query('orderId', params.orderId, {});
    rb.query('stateId', params.stateId, {});
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

apiOrderChangeStateOrderPost$Plain.PATH = '/api/Order/ChangeStateOrder';
