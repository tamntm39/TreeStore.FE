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

import { apiReviewCreateReviewPost$Json } from '../fn/review/api-review-create-review-post-json';
import { ApiReviewCreateReviewPost$Json$Params } from '../fn/review/api-review-create-review-post-json';
import { apiReviewCreateReviewPost$Plain } from '../fn/review/api-review-create-review-post-plain';
import { ApiReviewCreateReviewPost$Plain$Params } from '../fn/review/api-review-create-review-post-plain';
import { apiReviewDeleteReviewGetIdDelete$Json } from '../fn/review/api-review-delete-review-get-id-delete-json';
import { ApiReviewDeleteReviewGetIdDelete$Json$Params } from '../fn/review/api-review-delete-review-get-id-delete-json';
import { apiReviewDeleteReviewGetIdDelete$Plain } from '../fn/review/api-review-delete-review-get-id-delete-plain';
import { ApiReviewDeleteReviewGetIdDelete$Plain$Params } from '../fn/review/api-review-delete-review-get-id-delete-plain';
import { apiReviewGetByIdGetIdGet$Json } from '../fn/review/api-review-get-by-id-get-id-get-json';
import { ApiReviewGetByIdGetIdGet$Json$Params } from '../fn/review/api-review-get-by-id-get-id-get-json';
import { apiReviewGetByIdGetIdGet$Plain } from '../fn/review/api-review-get-by-id-get-id-get-plain';
import { ApiReviewGetByIdGetIdGet$Plain$Params } from '../fn/review/api-review-get-by-id-get-id-get-plain';
import { apiReviewGetReviewsByProductIdProductIdGet$Json } from '../fn/review/api-review-get-reviews-by-product-id-product-id-get-json';
import { ApiReviewGetReviewsByProductIdProductIdGet$Json$Params } from '../fn/review/api-review-get-reviews-by-product-id-product-id-get-json';
import { apiReviewGetReviewsByProductIdProductIdGet$Plain } from '../fn/review/api-review-get-reviews-by-product-id-product-id-get-plain';
import { ApiReviewGetReviewsByProductIdProductIdGet$Plain$Params } from '../fn/review/api-review-get-reviews-by-product-id-product-id-get-plain';
import { apiReviewGetTotalReviewsTotalReviewsGet$Json } from '../fn/review/api-review-get-total-reviews-total-reviews-get-json';
import { ApiReviewGetTotalReviewsTotalReviewsGet$Json$Params } from '../fn/review/api-review-get-total-reviews-total-reviews-get-json';
import { apiReviewGetTotalReviewsTotalReviewsGet$Plain } from '../fn/review/api-review-get-total-reviews-total-reviews-get-plain';
import { ApiReviewGetTotalReviewsTotalReviewsGet$Plain$Params } from '../fn/review/api-review-get-total-reviews-total-reviews-get-plain';
import { apiReviewListCustomersGet$Json } from '../fn/review/api-review-list-customers-get-json';
import { ApiReviewListCustomersGet$Json$Params } from '../fn/review/api-review-list-customers-get-json';
import { apiReviewListCustomersGet$Plain } from '../fn/review/api-review-list-customers-get-plain';
import { ApiReviewListCustomersGet$Plain$Params } from '../fn/review/api-review-list-customers-get-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { GetReviewInfoWithCustomerResultListResultCustomModel } from '../models/get-review-info-with-customer-result-list-result-custom-model';
import { Int32ResultCustomModel } from '../models/int-32-result-custom-model';
import { ReviewResponseListResultCustomModel } from '../models/review-response-list-result-custom-model';
import { ReviewResponseResultCustomModel } from '../models/review-response-result-custom-model';

@Injectable({ providedIn: 'root' })
export class ReviewService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReviewListCustomersGet()` */
  static readonly ApiReviewListCustomersGetPath = '/api/Review/ListCustomers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewListCustomersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListCustomersGet$Plain$Response(params?: ApiReviewListCustomersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetReviewInfoWithCustomerResultListResultCustomModel>> {
    return apiReviewListCustomersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewListCustomersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListCustomersGet$Plain(params?: ApiReviewListCustomersGet$Plain$Params, context?: HttpContext): Observable<GetReviewInfoWithCustomerResultListResultCustomModel> {
    return this.apiReviewListCustomersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetReviewInfoWithCustomerResultListResultCustomModel>): GetReviewInfoWithCustomerResultListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewListCustomersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListCustomersGet$Json$Response(params?: ApiReviewListCustomersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetReviewInfoWithCustomerResultListResultCustomModel>> {
    return apiReviewListCustomersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewListCustomersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewListCustomersGet$Json(params?: ApiReviewListCustomersGet$Json$Params, context?: HttpContext): Observable<GetReviewInfoWithCustomerResultListResultCustomModel> {
    return this.apiReviewListCustomersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetReviewInfoWithCustomerResultListResultCustomModel>): GetReviewInfoWithCustomerResultListResultCustomModel => r.body)
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
  apiReviewGetByIdGetIdGet$Plain$Response(params: ApiReviewGetByIdGetIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResponseResultCustomModel>> {
    return apiReviewGetByIdGetIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetByIdGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Plain(params: ApiReviewGetByIdGetIdGet$Plain$Params, context?: HttpContext): Observable<ReviewResponseResultCustomModel> {
    return this.apiReviewGetByIdGetIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResponseResultCustomModel>): ReviewResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetByIdGetIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Json$Response(params: ApiReviewGetByIdGetIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResponseResultCustomModel>> {
    return apiReviewGetByIdGetIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetByIdGetIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetByIdGetIdGet$Json(params: ApiReviewGetByIdGetIdGet$Json$Params, context?: HttpContext): Observable<ReviewResponseResultCustomModel> {
    return this.apiReviewGetByIdGetIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResponseResultCustomModel>): ReviewResponseResultCustomModel => r.body)
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

  /** Path part for operation `apiReviewCreateReviewPost()` */
  static readonly ApiReviewCreateReviewPostPath = '/api/Review/CreateReview';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewCreateReviewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Plain$Response(params?: ApiReviewCreateReviewPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiReviewCreateReviewPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewCreateReviewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Plain(params?: ApiReviewCreateReviewPost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiReviewCreateReviewPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewCreateReviewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Json$Response(params?: ApiReviewCreateReviewPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiReviewCreateReviewPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewCreateReviewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Json(params?: ApiReviewCreateReviewPost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiReviewCreateReviewPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiReviewGetReviewsByProductIdProductIdGet()` */
  static readonly ApiReviewGetReviewsByProductIdProductIdGetPath = '/api/Review/GetReviewsByProductId/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetReviewsByProductIdProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetReviewsByProductIdProductIdGet$Plain$Response(params: ApiReviewGetReviewsByProductIdProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResponseListResultCustomModel>> {
    return apiReviewGetReviewsByProductIdProductIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetReviewsByProductIdProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetReviewsByProductIdProductIdGet$Plain(params: ApiReviewGetReviewsByProductIdProductIdGet$Plain$Params, context?: HttpContext): Observable<ReviewResponseListResultCustomModel> {
    return this.apiReviewGetReviewsByProductIdProductIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResponseListResultCustomModel>): ReviewResponseListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetReviewsByProductIdProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetReviewsByProductIdProductIdGet$Json$Response(params: ApiReviewGetReviewsByProductIdProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReviewResponseListResultCustomModel>> {
    return apiReviewGetReviewsByProductIdProductIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetReviewsByProductIdProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetReviewsByProductIdProductIdGet$Json(params: ApiReviewGetReviewsByProductIdProductIdGet$Json$Params, context?: HttpContext): Observable<ReviewResponseListResultCustomModel> {
    return this.apiReviewGetReviewsByProductIdProductIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReviewResponseListResultCustomModel>): ReviewResponseListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiReviewGetTotalReviewsTotalReviewsGet()` */
  static readonly ApiReviewGetTotalReviewsTotalReviewsGetPath = '/api/Review/GetTotalReviews/total-reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetTotalReviewsTotalReviewsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetTotalReviewsTotalReviewsGet$Plain$Response(params?: ApiReviewGetTotalReviewsTotalReviewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiReviewGetTotalReviewsTotalReviewsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetTotalReviewsTotalReviewsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetTotalReviewsTotalReviewsGet$Plain(params?: ApiReviewGetTotalReviewsTotalReviewsGet$Plain$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiReviewGetTotalReviewsTotalReviewsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewGetTotalReviewsTotalReviewsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetTotalReviewsTotalReviewsGet$Json$Response(params?: ApiReviewGetTotalReviewsTotalReviewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiReviewGetTotalReviewsTotalReviewsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewGetTotalReviewsTotalReviewsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewGetTotalReviewsTotalReviewsGet$Json(params?: ApiReviewGetTotalReviewsTotalReviewsGet$Json$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiReviewGetTotalReviewsTotalReviewsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

}
