/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Order } from '../models/order';
export interface Customer {
  address?: string | null;
  createBy?: string | null;
  createByUserId?: number;
  createOn?: string;
  customerId?: number;
  email?: string | null;
  fullName?: string | null;
  image?: string | null;
  isActive?: boolean;
  isBadCustomer?: boolean;
  orders?: Array<Order> | null;
  password?: string | null;
  phone?: string | null;
  reasonBad?: string | null;
  username?: string | null;
}