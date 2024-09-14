/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationResponse } from '../../models/application-response';

export interface FindApplicationsByPosition$Params {
  'position-id': number;
}

export function findApplicationsByPosition(http: HttpClient, rootUrl: string, params: FindApplicationsByPosition$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationResponse>>> {
  const rb = new RequestBuilder(rootUrl, findApplicationsByPosition.PATH, 'get');
  if (params) {
    rb.path('position-id', params['position-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApplicationResponse>>;
    })
  );
}

findApplicationsByPosition.PATH = '/applications/allApps/{position-id}';
