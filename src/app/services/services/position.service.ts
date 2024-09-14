/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllPositionsByOffer } from '../fn/position/find-all-positions-by-offer';
import { FindAllPositionsByOffer$Params } from '../fn/position/find-all-positions-by-offer';
import { findPositionById } from '../fn/position/find-position-by-id';
import { FindPositionById$Params } from '../fn/position/find-position-by-id';
import { PositionResponse } from '../models/position-response';
import { savePosition } from '../fn/position/save-position';
import { SavePosition$Params } from '../fn/position/save-position';

@Injectable({ providedIn: 'root' })
export class PositionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `savePosition()` */
  static readonly SavePositionPath = '/positions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePosition()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePosition$Response(params: SavePosition$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return savePosition(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePosition$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePosition(params: SavePosition$Params, context?: HttpContext): Observable<number> {
    return this.savePosition$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findPositionById()` */
  static readonly FindPositionByIdPath = '/positions/{position-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPositionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPositionById$Response(params: FindPositionById$Params, context?: HttpContext): Observable<StrictHttpResponse<PositionResponse>> {
    return findPositionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findPositionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPositionById(params: FindPositionById$Params, context?: HttpContext): Observable<PositionResponse> {
    return this.findPositionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PositionResponse>): PositionResponse => r.body)
    );
  }

  /** Path part for operation `findAllPositionsByOffer()` */
  static readonly FindAllPositionsByOfferPath = '/positions/offer/{offer-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPositionsByOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPositionsByOffer$Response(params: FindAllPositionsByOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PositionResponse>>> {
    return findAllPositionsByOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPositionsByOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPositionsByOffer(params: FindAllPositionsByOffer$Params, context?: HttpContext): Observable<Array<PositionResponse>> {
    return this.findAllPositionsByOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PositionResponse>>): Array<PositionResponse> => r.body)
    );
  }

}
