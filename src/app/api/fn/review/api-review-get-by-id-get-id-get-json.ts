/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReviewResponseResultCustomModel } from '../../models/review-response-result-custom-model';

export interface ApiReviewGetByIdGetIdGet$Json$Params {
  reviewId?: number;
  GetId: string;
}

export function apiReviewGetByIdGetIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReviewGetByIdGetIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResponseResultCustomModel>> {
  const rb = new RequestBuilder(rootUrl, apiReviewGetByIdGetIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('reviewId', params.reviewId, {});
    rb.path('GetId', params.GetId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReviewResponseResultCustomModel>;
    })
  );
}

apiReviewGetByIdGetIdGet$Json.PATH = '/api/Review/GetById/{GetId}';
