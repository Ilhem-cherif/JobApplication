/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/authentication/authenticate';
import { Authenticate$Params } from '../fn/authentication/authenticate';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirm } from '../fn/authentication/confirm';
import { Confirm$Params } from '../fn/authentication/confirm';
import { EntrepriseProfileResponse } from '../models/entreprise-profile-response';
import { getProfileByCandidate } from '../fn/authentication/get-profile-by-candidate';
import { GetProfileByCandidate$Params } from '../fn/authentication/get-profile-by-candidate';
import { getProfileByEmployer } from '../fn/authentication/get-profile-by-employer';
import { GetProfileByEmployer$Params } from '../fn/authentication/get-profile-by-employer';
import { ProfileResponse } from '../models/profile-response';
import { register } from '../fn/authentication/register';
import { Register$Params } from '../fn/authentication/register';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<string> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `getProfileByCandidate()` */
  static readonly GetProfileByCandidatePath = '/auth/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileByCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileByCandidate$Response(params?: GetProfileByCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileResponse>> {
    return getProfileByCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfileByCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileByCandidate(params?: GetProfileByCandidate$Params, context?: HttpContext): Observable<ProfileResponse> {
    return this.getProfileByCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProfileResponse>): ProfileResponse => r.body)
    );
  }

  /** Path part for operation `getProfileByEmployer()` */
  static readonly GetProfileByEmployerPath = '/auth/entreprise-profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileByEmployer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileByEmployer$Response(params?: GetProfileByEmployer$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseProfileResponse>> {
    return getProfileByEmployer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfileByEmployer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileByEmployer(params?: GetProfileByEmployer$Params, context?: HttpContext): Observable<EntrepriseProfileResponse> {
    return this.getProfileByEmployer$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntrepriseProfileResponse>): EntrepriseProfileResponse => r.body)
    );
  }

  /** Path part for operation `confirm()` */
  static readonly ConfirmPath = '/auth/activate-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: Confirm$Params, context?: HttpContext): Observable<void> {
    return this.confirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
