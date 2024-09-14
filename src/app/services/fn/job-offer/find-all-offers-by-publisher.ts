/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseOfferResponse } from '../../models/page-response-offer-response';

export interface FindAllOffersByPublisher$Params {
  page?: number;
  size?: number;
}

export function findAllOffersByPublisher(http: HttpClient, rootUrl: string, params?: FindAllOffersByPublisher$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseOfferResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllOffersByPublisher.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseOfferResponse>;
    })
  );
}

findAllOffersByPublisher.PATH = '/offers/publisher';
