/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PromotionRequest } from '../../models/promotion-request';
import { PromotionResponseResultCustomModel } from '../../models/promotion-response-result-custom-model';

export interface ApiPromotionUpdatePromotionPut$Plain$Params {
      body?: PromotionRequest
}

export function apiPromotionUpdatePromotionPut$Plain(http: HttpClient, rootUrl: string, params?: ApiPromotionUpdatePromotionPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PromotionResponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiPromotionUpdatePromotionPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PromotionResponseResultCustomModel>;
    })
  );
}

apiPromotionUpdatePromotionPut$Plain.PATH = '/api/Promotion/UpdatePromotion';