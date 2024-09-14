/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntrepriseProfileResponse } from '../../models/entreprise-profile-response';

export interface GetProfileByEmployer$Params {
}

export function getProfileByEmployer(http: HttpClient, rootUrl: string, params?: GetProfileByEmployer$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseProfileResponse>> {
  const rb = new RequestBuilder(rootUrl, getProfileByEmployer.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntrepriseProfileResponse>;
    })
  );
}

getProfileByEmployer.PATH = '/auth/entreprise-profile';
