/* tslint:disable */
/* eslint-disable */
export interface RegistrationDto {
  age?: number;
  email: string;
  entrepriseDescription?: string;
  entrepriseLocation?: string;
  entrepriseLogo?: string;
  entrepriseName?: string;
  entrepriseWebsite?: string;
  firstname: string;
  lastname: string;
  password: string;
  personalResume?: string;
  phoneNumber?: string;
  photo?: string;
  role: 'CANDIDATE' | 'EMPLOYER';
}
