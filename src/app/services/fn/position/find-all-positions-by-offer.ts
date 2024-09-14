/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PositionResponse } from '../../models/position-response';

export interface FindAllPositionsByOffer$Params {
  'offer-id': number;
}

export function findAllPositionsByOffer(http: HttpClient, rootUrl: string, params: FindAllPositionsByOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PositionResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAllPositionsByOffer.PATH, 'get');
  if (params) {
    rb.path('offer-id', params['offer-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PositionResponse>>;
    })
  );
}

findAllPositionsByOffer.PATH = '/positions/offer/{offer-id}';
