import { Component } from '@angular/core';
import { RegistrationDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor(
  private router: Router,
  private authService: AuthenticationService
){

}

  login() {
   this.router.navigate(['login']);
  }
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: ()=>{
         this.router.navigate(['activate-account']);
      },
      error: (err) =>{
        this.errorMsg = err.error.validationErrors;
      }
    })
  }
  
  registerRequest: RegistrationDto = {email:'', firstname: '', lastname: '', password: '',role: 'CANDIDATE' ,
    personalResume:'', phoneNumber:'', age: 0, photo:'',
    entrepriseName:'', entrepriseDescription:'', entrepriseLogo:'', entrepriseWebsite:'', entrepriseLocation:''};
  errorMsg: Array<string> = [];

}
