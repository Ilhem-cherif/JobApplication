/* tslint:disable */
/* eslint-disable */
import { UserDto } from '../models/user-dto';
export interface AuthenticationResponse {
  expiredAt?: string;
  message?: string;
  status?: string;
  token?: string;
  user?: UserDto;
}
