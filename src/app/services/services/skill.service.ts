/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllSkillsByCandidate } from '../fn/skill/get-all-skills-by-candidate';
import { GetAllSkillsByCandidate$Params } from '../fn/skill/get-all-skills-by-candidate';
import { saveSkill } from '../fn/skill/save-skill';
import { SaveSkill$Params } from '../fn/skill/save-skill';
import { SkillResponse } from '../models/skill-response';

@Injectable({ providedIn: 'root' })
export class SkillService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveSkill()` */
  static readonly SaveSkillPath = '/skills';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSkill()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSkill$Response(params: SaveSkill$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveSkill(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSkill$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSkill(params: SaveSkill$Params, context?: HttpContext): Observable<number> {
    return this.saveSkill$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllSkillsByCandidate()` */
  static readonly GetAllSkillsByCandidatePath = '/skills/candidate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSkillsByCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSkillsByCandidate$Response(params?: GetAllSkillsByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SkillResponse>>> {
    return getAllSkillsByCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSkillsByCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSkillsByCandidate(params?: GetAllSkillsByCandidate$Params, context?: HttpContext): Observable<Array<SkillResponse>> {
    return this.getAllSkillsByCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SkillResponse>>): Array<SkillResponse> => r.body)
    );
  }

}
