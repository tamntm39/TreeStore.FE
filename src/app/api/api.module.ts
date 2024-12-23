/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CategoryService } from './services/category.service';
import { CustomerService } from './services/customer.service';
import { ExportService } from './services/export.service';
import { LoginService } from './services/login.service';
import { OrderService } from './services/order.service';
import { PayPalService } from './services/pay-pal.service';
import { ProductService } from './services/product.service';
import { PromotionService } from './services/promotion.service';
import { ReviewService } from './services/review.service';
import { UploadService } from './services/upload.service';
import { UserService } from './services/user.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CategoryService,
    CustomerService,
    ExportService,
    LoginService,
    OrderService,
    PayPalService,
    ProductService,
    PromotionService,
    ReviewService,
    UploadService,
    UserService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
