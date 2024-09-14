/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllOffers } from '../fn/job-offer/find-all-offers';
import { FindAllOffers$Params } from '../fn/job-offer/find-all-offers';
import { findAllOffersByPublisher } from '../fn/job-offer/find-all-offers-by-publisher';
import { FindAllOffersByPublisher$Params } from '../fn/job-offer/find-all-offers-by-publisher';
import { findOfferById } from '../fn/job-offer/find-offer-by-id';
import { FindOfferById$Params } from '../fn/job-offer/find-offer-by-id';
import { OfferResponse } from '../models/offer-response';
import { PageResponseOfferResponse } from '../models/page-response-offer-response';
import { saveOffer } from '../fn/job-offer/save-offer';
import { SaveOffer$Params } from '../fn/job-offer/save-offer';
import { searchOffers } from '../fn/job-offer/search-offers';
import { SearchOffers$Params } from '../fn/job-offer/search-offers';
import { updateConfirmedStatus } from '../fn/job-offer/update-confirmed-status';
import { UpdateConfirmedStatus$Params } from '../fn/job-offer/update-confirmed-status';

@Injectable({ providedIn: 'root' })
export class JobOfferService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllOffers()` */
  static readonly FindAllOffersPath = '/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOffers$Response(params?: FindAllOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseOfferResponse>> {
    return findAllOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOffers(params?: FindAllOffers$Params, context?: HttpContext): Observable<PageResponseOfferResponse> {
    return this.findAllOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseOfferResponse>): PageResponseOfferResponse => r.body)
    );
  }

  /** Path part for operation `saveOffer()` */
  static readonly SaveOfferPath = '/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOffer$Response(params: SaveOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOffer(params: SaveOffer$Params, context?: HttpContext): Observable<number> {
    return this.saveOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateConfirmedStatus()` */
  static readonly UpdateConfirmedStatusPath = '/offers/confirmed/{offer-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateConfirmedStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateConfirmedStatus$Response(params: UpdateConfirmedStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateConfirmedStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateConfirmedStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateConfirmedStatus(params: UpdateConfirmedStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateConfirmedStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findOfferById()` */
  static readonly FindOfferByIdPath = '/offers/{offer-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOfferById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOfferById$Response(params: FindOfferById$Params, context?: HttpContext): Observable<StrictHttpResponse<OfferResponse>> {
    return findOfferById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findOfferById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOfferById(params: FindOfferById$Params, context?: HttpContext): Observable<OfferResponse> {
    return this.findOfferById$Response(params, context).pipe(
      map((r: StrictHttpResponse<OfferResponse>): OfferResponse => r.body)
    );
  }

  /** Path part for operation `searchOffers()` */
  static readonly SearchOffersPath = '/offers/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOffers$Response(params?: SearchOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseOfferResponse>> {
    return searchOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchOffers(params?: SearchOffers$Params, context?: HttpContext): Observable<PageResponseOfferResponse> {
    return this.searchOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseOfferResponse>): PageResponseOfferResponse => r.body)
    );
  }

  /** Path part for operation `findAllOffersByPublisher()` */
  static readonly FindAllOffersByPublisherPath = '/offers/publisher';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllOffersByPublisher()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOffersByPublisher$Response(params?: FindAllOffersByPublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseOfferResponse>> {
    return findAllOffersByPublisher(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllOffersByPublisher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOffersByPublisher(params?: FindAllOffersByPublisher$Params, context?: HttpContext): Observable<PageResponseOfferResponse> {
    return this.findAllOffersByPublisher$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseOfferResponse>): PageResponseOfferResponse => r.body)
    );
  }

}
