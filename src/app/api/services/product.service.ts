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

import { apiProductChangeActivePost$Json } from '../fn/product/api-product-change-active-post-json';
import { ApiProductChangeActivePost$Json$Params } from '../fn/product/api-product-change-active-post-json';
import { apiProductChangeActivePost$Plain } from '../fn/product/api-product-change-active-post-plain';
import { ApiProductChangeActivePost$Plain$Params } from '../fn/product/api-product-change-active-post-plain';
import { apiProductCreatePost$Json } from '../fn/product/api-product-create-post-json';
import { ApiProductCreatePost$Json$Params } from '../fn/product/api-product-create-post-json';
import { apiProductCreatePost$Plain } from '../fn/product/api-product-create-post-plain';
import { ApiProductCreatePost$Plain$Params } from '../fn/product/api-product-create-post-plain';
import { apiProductDeleteDelete$Json } from '../fn/product/api-product-delete-delete-json';
import { ApiProductDeleteDelete$Json$Params } from '../fn/product/api-product-delete-delete-json';
import { apiProductDeleteDelete$Plain } from '../fn/product/api-product-delete-delete-plain';
import { ApiProductDeleteDelete$Plain$Params } from '../fn/product/api-product-delete-delete-plain';
import { apiProductGetAllGet$Json } from '../fn/product/api-product-get-all-get-json';
import { ApiProductGetAllGet$Json$Params } from '../fn/product/api-product-get-all-get-json';
import { apiProductGetAllGet$Plain } from '../fn/product/api-product-get-all-get-plain';
import { ApiProductGetAllGet$Plain$Params } from '../fn/product/api-product-get-all-get-plain';
import { apiProductGetCategorysGet$Json } from '../fn/product/api-product-get-categorys-get-json';
import { ApiProductGetCategorysGet$Json$Params } from '../fn/product/api-product-get-categorys-get-json';
import { apiProductGetCategorysGet$Plain } from '../fn/product/api-product-get-categorys-get-plain';
import { ApiProductGetCategorysGet$Plain$Params } from '../fn/product/api-product-get-categorys-get-plain';
import { apiProductGetProductByIdGet$Json } from '../fn/product/api-product-get-product-by-id-get-json';
import { ApiProductGetProductByIdGet$Json$Params } from '../fn/product/api-product-get-product-by-id-get-json';
import { apiProductGetProductByIdGet$Plain } from '../fn/product/api-product-get-product-by-id-get-plain';
import { ApiProductGetProductByIdGet$Plain$Params } from '../fn/product/api-product-get-product-by-id-get-plain';
import { apiProductGetTotalProductsTotalProductsGet$Json } from '../fn/product/api-product-get-total-products-total-products-get-json';
import { ApiProductGetTotalProductsTotalProductsGet$Json$Params } from '../fn/product/api-product-get-total-products-total-products-get-json';
import { apiProductGetTotalProductsTotalProductsGet$Plain } from '../fn/product/api-product-get-total-products-total-products-get-plain';
import { ApiProductGetTotalProductsTotalProductsGet$Plain$Params } from '../fn/product/api-product-get-total-products-total-products-get-plain';
import { apiProductListProductGet$Json } from '../fn/product/api-product-list-product-get-json';
import { ApiProductListProductGet$Json$Params } from '../fn/product/api-product-list-product-get-json';
import { apiProductListProductGet$Plain } from '../fn/product/api-product-list-product-get-plain';
import { ApiProductListProductGet$Plain$Params } from '../fn/product/api-product-list-product-get-plain';
import { apiProductSearchByNameGet$Json } from '../fn/product/api-product-search-by-name-get-json';
import { ApiProductSearchByNameGet$Json$Params } from '../fn/product/api-product-search-by-name-get-json';
import { apiProductSearchByNameGet$Plain } from '../fn/product/api-product-search-by-name-get-plain';
import { ApiProductSearchByNameGet$Plain$Params } from '../fn/product/api-product-search-by-name-get-plain';
import { apiProductSearchProductsGet$Json } from '../fn/product/api-product-search-products-get-json';
import { ApiProductSearchProductsGet$Json$Params } from '../fn/product/api-product-search-products-get-json';
import { apiProductSearchProductsGet$Plain } from '../fn/product/api-product-search-products-get-plain';
import { ApiProductSearchProductsGet$Plain$Params } from '../fn/product/api-product-search-products-get-plain';
import { apiProductUpdatePut$Json } from '../fn/product/api-product-update-put-json';
import { ApiProductUpdatePut$Json$Params } from '../fn/product/api-product-update-put-json';
import { apiProductUpdatePut$Plain } from '../fn/product/api-product-update-put-plain';
import { ApiProductUpdatePut$Plain$Params } from '../fn/product/api-product-update-put-plain';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { CreateCategoryRequestListResultCustomModel } from '../models/create-category-request-list-result-custom-model';
import { GetListProductSpResultListResultCustomModel } from '../models/get-list-product-sp-result-list-result-custom-model';
import { Int32ResultCustomModel } from '../models/int-32-result-custom-model';
import { ProductListResultCustomModel } from '../models/product-list-result-custom-model';
import { ProductResponseResultCustomModel } from '../models/product-response-result-custom-model';
import { UpdateProductReponseResultCustomModel } from '../models/update-product-reponse-result-custom-model';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductGetAllGet()` */
  static readonly ApiProductGetAllGetPath = '/api/Product/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllGet$Plain$Response(params?: ApiProductGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResultCustomModel>> {
    return apiProductGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllGet$Plain(params?: ApiProductGetAllGet$Plain$Params, context?: HttpContext): Observable<ProductListResultCustomModel> {
    return this.apiProductGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>): ProductListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllGet$Json$Response(params?: ApiProductGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductListResultCustomModel>> {
    return apiProductGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllGet$Json(params?: ApiProductGetAllGet$Json$Params, context?: HttpContext): Observable<ProductListResultCustomModel> {
    return this.apiProductGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>): ProductListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductListProductGet()` */
  static readonly ApiProductListProductGetPath = '/api/Product/ListProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductListProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Plain$Response(params?: ApiProductListProductGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductListProductGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductListProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Plain(params?: ApiProductListProductGet$Plain$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductListProductGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductListProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Json$Response(params?: ApiProductListProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductListProductGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductListProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Json(params?: ApiProductListProductGet$Json$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductListProductGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductGetProductByIdGet()` */
  static readonly ApiProductGetProductByIdGetPath = '/api/Product/GetProductById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetProductByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductByIdGet$Plain$Response(params?: ApiProductGetProductByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponseResultCustomModel>> {
    return apiProductGetProductByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetProductByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductByIdGet$Plain(params?: ApiProductGetProductByIdGet$Plain$Params, context?: HttpContext): Observable<ProductResponseResultCustomModel> {
    return this.apiProductGetProductByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductResponseResultCustomModel>): ProductResponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetProductByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductByIdGet$Json$Response(params?: ApiProductGetProductByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponseResultCustomModel>> {
    return apiProductGetProductByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetProductByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductByIdGet$Json(params?: ApiProductGetProductByIdGet$Json$Params, context?: HttpContext): Observable<ProductResponseResultCustomModel> {
    return this.apiProductGetProductByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductResponseResultCustomModel>): ProductResponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductDeleteDelete()` */
  static readonly ApiProductDeleteDeletePath = '/api/Product/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete$Plain$Response(params?: ApiProductDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductDeleteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete$Plain(params?: ApiProductDeleteDelete$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductDeleteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete$Json$Response(params?: ApiProductDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductDeleteDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete$Json(params?: ApiProductDeleteDelete$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductDeleteDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductUpdatePut()` */
  static readonly ApiProductUpdatePutPath = '/api/Product/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut$Plain$Response(params?: ApiProductUpdatePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateProductReponseResultCustomModel>> {
    return apiProductUpdatePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut$Plain(params?: ApiProductUpdatePut$Plain$Params, context?: HttpContext): Observable<UpdateProductReponseResultCustomModel> {
    return this.apiProductUpdatePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateProductReponseResultCustomModel>): UpdateProductReponseResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut$Json$Response(params?: ApiProductUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateProductReponseResultCustomModel>> {
    return apiProductUpdatePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut$Json(params?: ApiProductUpdatePut$Json$Params, context?: HttpContext): Observable<UpdateProductReponseResultCustomModel> {
    return this.apiProductUpdatePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateProductReponseResultCustomModel>): UpdateProductReponseResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductGetCategorysGet()` */
  static readonly ApiProductGetCategorysGetPath = '/api/Product/GetCategorys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetCategorysGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetCategorysGet$Plain$Response(params?: ApiProductGetCategorysGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCategoryRequestListResultCustomModel>> {
    return apiProductGetCategorysGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetCategorysGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetCategorysGet$Plain(params?: ApiProductGetCategorysGet$Plain$Params, context?: HttpContext): Observable<CreateCategoryRequestListResultCustomModel> {
    return this.apiProductGetCategorysGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCategoryRequestListResultCustomModel>): CreateCategoryRequestListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetCategorysGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetCategorysGet$Json$Response(params?: ApiProductGetCategorysGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCategoryRequestListResultCustomModel>> {
    return apiProductGetCategorysGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetCategorysGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetCategorysGet$Json(params?: ApiProductGetCategorysGet$Json$Params, context?: HttpContext): Observable<CreateCategoryRequestListResultCustomModel> {
    return this.apiProductGetCategorysGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCategoryRequestListResultCustomModel>): CreateCategoryRequestListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductCreatePost()` */
  static readonly ApiProductCreatePostPath = '/api/Product/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductCreatePost$Plain$Response(params?: ApiProductCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductCreatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductCreatePost$Plain(params?: ApiProductCreatePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductCreatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductCreatePost$Json$Response(params?: ApiProductCreatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductCreatePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductCreatePost$Json(params?: ApiProductCreatePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductCreatePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductSearchByNameGet()` */
  static readonly ApiProductSearchByNameGetPath = '/api/Product/SearchByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchByNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchByNameGet$Plain$Response(params?: ApiProductSearchByNameGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductSearchByNameGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchByNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchByNameGet$Plain(params?: ApiProductSearchByNameGet$Plain$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductSearchByNameGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchByNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchByNameGet$Json$Response(params?: ApiProductSearchByNameGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductSearchByNameGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchByNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchByNameGet$Json(params?: ApiProductSearchByNameGet$Json$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductSearchByNameGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductSearchProductsGet()` */
  static readonly ApiProductSearchProductsGetPath = '/api/Product/SearchProducts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchProductsGet$Plain$Response(params?: ApiProductSearchProductsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductSearchProductsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchProductsGet$Plain(params?: ApiProductSearchProductsGet$Plain$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductSearchProductsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchProductsGet$Json$Response(params?: ApiProductSearchProductsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetListProductSpResultListResultCustomModel>> {
    return apiProductSearchProductsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductSearchProductsGet$Json(params?: ApiProductSearchProductsGet$Json$Params, context?: HttpContext): Observable<GetListProductSpResultListResultCustomModel> {
    return this.apiProductSearchProductsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetListProductSpResultListResultCustomModel>): GetListProductSpResultListResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductChangeActivePost()` */
  static readonly ApiProductChangeActivePostPath = '/api/Product/ChangeActive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductChangeActivePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductChangeActivePost$Plain$Response(params?: ApiProductChangeActivePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductChangeActivePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductChangeActivePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductChangeActivePost$Plain(params?: ApiProductChangeActivePost$Plain$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductChangeActivePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductChangeActivePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductChangeActivePost$Json$Response(params?: ApiProductChangeActivePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanResultCustomModel>> {
    return apiProductChangeActivePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductChangeActivePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductChangeActivePost$Json(params?: ApiProductChangeActivePost$Json$Params, context?: HttpContext): Observable<BooleanResultCustomModel> {
    return this.apiProductChangeActivePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>): BooleanResultCustomModel => r.body)
    );
  }

  /** Path part for operation `apiProductGetTotalProductsTotalProductsGet()` */
  static readonly ApiProductGetTotalProductsTotalProductsGetPath = '/api/Product/GetTotalProducts/total-products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetTotalProductsTotalProductsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetTotalProductsTotalProductsGet$Plain$Response(params?: ApiProductGetTotalProductsTotalProductsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiProductGetTotalProductsTotalProductsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetTotalProductsTotalProductsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetTotalProductsTotalProductsGet$Plain(params?: ApiProductGetTotalProductsTotalProductsGet$Plain$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiProductGetTotalProductsTotalProductsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetTotalProductsTotalProductsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetTotalProductsTotalProductsGet$Json$Response(params?: ApiProductGetTotalProductsTotalProductsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResultCustomModel>> {
    return apiProductGetTotalProductsTotalProductsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGetTotalProductsTotalProductsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetTotalProductsTotalProductsGet$Json(params?: ApiProductGetTotalProductsTotalProductsGet$Json$Params, context?: HttpContext): Observable<Int32ResultCustomModel> {
    return this.apiProductGetTotalProductsTotalProductsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResultCustomModel>): Int32ResultCustomModel => r.body)
    );
  }

}
