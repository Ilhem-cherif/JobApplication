import { Component, inject } from '@angular/core';
import { AuthenticationDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationDto = {email: '', password: ''};
  erroMsg: Array<String> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ){

  }

  register() {
    this.router.navigate(['register']);
  }
  login() {
    this.erroMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) =>{
        //save the token
        this.tokenService.token = res.token as string;
        // Check the user's role and navigate accordingly
        if (res.user?.role === 'CANDIDATE') {
          this.router.navigate(['/candidates']);
        } else if (res.user?.role === 'EMPLOYER') {
          this.router.navigate(['/employers']);
        } else {
          // Handle unknown role case
          console.error('Unknown user role:', res.user?.role);
        }
      },
      error: (err) =>{
        console.log(err);
        if(err.error.validationErrors){
          this.erroMsg = err.error.validationErrors;
        }else{
          this.erroMsg.push(err.error.error);
        }
      }
    });
  }

}
