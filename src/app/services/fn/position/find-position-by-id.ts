/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PositionResponse } from '../../models/position-response';

export interface FindPositionById$Params {
  'position-id': number;
}

export function findPositionById(http: HttpClient, rootUrl: string, params: FindPositionById$Params, context?: HttpContext): Observable<StrictHttpResponse<PositionResponse>> {
  const rb = new RequestBuilder(rootUrl, findPositionById.PATH, 'get');
  if (params) {
    rb.path('position-id', params['position-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PositionResponse>;
    })
  );
}

findPositionById.PATH = '/positions/{position-id}';
