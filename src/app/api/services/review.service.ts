/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReviewDeleteReviewGetIdDelete$Json } from '../fn/review/api-review-delete-review-get-id-delete-json';
import { ApiReviewDeleteReviewGetIdDelete$Json$Params } from '../fn/review/api-review-delete-review-get-id-delete-json';
import { apiReviewDeleteReviewGetIdDelete$Plain } from '../fn/review/api-review-delete-review-get-id-delete-plain';
import { ApiReviewDeleteReviewGetIdDelete$Plain$Params } from '../fn/review/api-review-delete-review-get-id-delete-plain';
import { apiReviewGetByIdGetIdGet$Json } from '../fn/review/api-review-get-by-id-get-id-get-json';
import { ApiReviewGetByIdGetIdGet$Json$Params } from '../fn/review/api-review-get-by-id-get-id-get-json';
import { apiReviewGetByIdGetIdGet$Plain } from '../fn/review/api-review-get-by-id-get-id-get-plain';
import { ApiReviewGetByIdGetIdGet$Plain$Params } from '../fn/review/api-review-get-by-id-get-id-get-plain';
import { apiReviewListReviewGet$Json } from '../fn/review/api-review-list-review-get-json';
import { ApiReviewListReviewGet$Json$Params } from '../fn/review/api-review-list-review-get-json';
import { apiReviewListReviewGet$Plain } from '../fn/review/api-review-list-review-get-plain';
import { ApiReviewListReviewGet$Plain$Params } from '../fn/review/api-review-list-review-get-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { ReviewListResultCustomModel } from '../models/review-list-result-custom-model';
import { ReviewResultCustomModel } from '../models/review-result-custom-model';

@Injectable({ providedIn: 'root' })
export class ReviewService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReviewListReviewGet()` */
  static readonly ApiReviewListReviewGetPath = '/api/Review/ListReview';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewListReviewGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListReviewGet$Plain$Response(params?: ApiReviewListReviewGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewListResultCustomModel>> {
    return apiReviewListReviewGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewListReviewGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListReviewGet$Plain(params?: ApiReviewListReviewGet$Plain$Params, context?: HttpContext): Observable<ReviewListResultCustomModel> {
    return this.apiReviewListReviewGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewListResultCustomModel>): ReviewListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewListReviewGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListReviewGet$Json$Response(params?: ApiReviewListReviewGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewListResultCustomModel>> {
    return apiReviewListReviewGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewListReviewGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListReviewGet$Json(params?: ApiReviewListReviewGet$Json$Params, context?: HttpContext): Observable<ReviewListResultCustomModel> {
    return this.apiReviewListReviewGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewListResultCustomModel>): ReviewListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiReviewGetByIdGetIdGet()` */
  static readonly ApiReviewGetByIdGetIdGetPath = '/api/Review/GetById/{GetId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetByIdGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Plain$Response(params: ApiReviewGetByIdGetIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResultCustomModel>> {
    return apiReviewGetByIdGetIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetByIdGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Plain(params: ApiReviewGetByIdGetIdGet$Plain$Params, context?: HttpContext): Observable<ReviewResultCustomModel> {
    return this.apiReviewGetByIdGetIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResultCustomModel>): ReviewResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetByIdGetIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Json$Response(params: ApiReviewGetByIdGetIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResultCustomModel>> {
    return apiReviewGetByIdGetIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetByIdGetIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Json(params: ApiReviewGetByIdGetIdGet$Json$Params, context?: HttpContext): Observable<ReviewResultCustomModel> {
    return this.apiReviewGetByIdGetIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResultCustomModel>): ReviewResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiReviewDeleteReviewGetIdDelete()` */
  static readonly ApiReviewDeleteReviewGetIdDeletePath = '/api/Review/DeleteReview/{GetId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewDeleteReviewGetIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewDeleteReviewGetIdDelete$Plain$Response(params: ApiReviewDeleteReviewGetIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiReviewDeleteReviewGetIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewDeleteReviewGetIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewDeleteReviewGetIdDelete$Plain(params: ApiReviewDeleteReviewGetIdDelete$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiReviewDeleteReviewGetIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewDeleteReviewGetIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewDeleteReviewGetIdDelete$Json$Response(params: ApiReviewDeleteReviewGetIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiReviewDeleteReviewGetIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewDeleteReviewGetIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewDeleteReviewGetIdDelete$Json(params: ApiReviewDeleteReviewGetIdDelete$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiReviewDeleteReviewGetIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

}