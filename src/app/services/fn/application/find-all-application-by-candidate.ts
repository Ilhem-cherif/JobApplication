/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationResponse } from '../../models/application-response';

export interface FindAllApplicationByCandidate$Params {
}

export function findAllApplicationByCandidate(http: HttpClient, rootUrl: string, params?: FindAllApplicationByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApplicationResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAllApplicationByCandidate.PATH, 'get');
  if (params) {
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

findAllApplicationByCandidate.PATH = '/applications/candidateApp';
