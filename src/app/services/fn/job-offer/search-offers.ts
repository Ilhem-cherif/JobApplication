/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseOfferResponse } from '../../models/page-response-offer-response';

export interface SearchOffers$Params {
  query?: string;
  page?: number;
  size?: number;
}

export function searchOffers(http: HttpClient, rootUrl: string, params?: SearchOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseOfferResponse>> {
  const rb = new RequestBuilder(rootUrl, searchOffers.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
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

searchOffers.PATH = '/offers/search';
