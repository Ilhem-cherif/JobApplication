/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ExperienceResponse } from '../models/experience-response';
import { getAllExperienceByCandidate } from '../fn/experience/get-all-experience-by-candidate';
import { GetAllExperienceByCandidate$Params } from '../fn/experience/get-all-experience-by-candidate';
import { saveExperience } from '../fn/experience/save-experience';
import { SaveExperience$Params } from '../fn/experience/save-experience';

@Injectable({ providedIn: 'root' })
export class ExperienceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveExperience()` */
  static readonly SaveExperiencePath = '/experiences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveExperience()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveExperience$Response(params: SaveExperience$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveExperience(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveExperience$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveExperience(params: SaveExperience$Params, context?: HttpContext): Observable<number> {
    return this.saveExperience$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllExperienceByCandidate()` */
  static readonly GetAllExperienceByCandidatePath = '/experiences/candidate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllExperienceByCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllExperienceByCandidate$Response(params?: GetAllExperienceByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ExperienceResponse>>> {
    return getAllExperienceByCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllExperienceByCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllExperienceByCandidate(params?: GetAllExperienceByCandidate$Params, context?: HttpContext): Observable<Array<ExperienceResponse>> {
    return this.getAllExperienceByCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ExperienceResponse>>): Array<ExperienceResponse> => r.body)
    );
  }

}
