/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EducationResponse } from '../models/education-response';
import { getAllEducationByCandidate } from '../fn/education/get-all-education-by-candidate';
import { GetAllEducationByCandidate$Params } from '../fn/education/get-all-education-by-candidate';
import { saveEducation } from '../fn/education/save-education';
import { SaveEducation$Params } from '../fn/education/save-education';

@Injectable({ providedIn: 'root' })
export class EducationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveEducation()` */
  static readonly SaveEducationPath = '/educations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEducation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEducation$Response(params: SaveEducation$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveEducation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEducation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEducation(params: SaveEducation$Params, context?: HttpContext): Observable<number> {
    return this.saveEducation$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllEducationByCandidate()` */
  static readonly GetAllEducationByCandidatePath = '/educations/candidate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEducationByCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEducationByCandidate$Response(params?: GetAllEducationByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EducationResponse>>> {
    return getAllEducationByCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEducationByCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEducationByCandidate(params?: GetAllEducationByCandidate$Params, context?: HttpContext): Observable<Array<EducationResponse>> {
    return this.getAllEducationByCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EducationResponse>>): Array<EducationResponse> => r.body)
    );
  }

}
