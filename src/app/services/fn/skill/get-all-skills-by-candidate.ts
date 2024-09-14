/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SkillResponse } from '../../models/skill-response';

export interface GetAllSkillsByCandidate$Params {
}

export function getAllSkillsByCandidate(http: HttpClient, rootUrl: string, params?: GetAllSkillsByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SkillResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllSkillsByCandidate.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SkillResponse>>;
    })
  );
}

getAllSkillsByCandidate.PATH = '/skills/candidate';
