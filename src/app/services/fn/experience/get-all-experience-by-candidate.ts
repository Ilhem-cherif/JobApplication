/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExperienceResponse } from '../../models/experience-response';

export interface GetAllExperienceByCandidate$Params {
}

export function getAllExperienceByCandidate(http: HttpClient, rootUrl: string, params?: GetAllExperienceByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ExperienceResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllExperienceByCandidate.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ExperienceResponse>>;
    })
  );
}

getAllExperienceByCandidate.PATH = '/experiences/candidate';
