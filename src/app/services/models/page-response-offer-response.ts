/* tslint:disable */
/* eslint-disable */
import { OfferResponse } from '../models/offer-response';
export interface PageResponseOfferResponse {
  content?: Array<OfferResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
