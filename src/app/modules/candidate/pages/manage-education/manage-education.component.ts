import { Component, OnInit } from '@angular/core';
import { EducationRequest } from '../../../../services/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EducationService } from '../../../../services/services';

@Component({
  selector: 'app-manage-education',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-education.component.html',
  styleUrl: './manage-education.component.scss'
})
export class ManageEducationComponent{

  errorMsg: Array<string> = [];
  educationRequest: EducationRequest = {
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  constructor(
    private educationService: EducationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  saveEducation() {
    this.educationService.saveEducation({
      body: this.educationRequest
    }).subscribe({
        next: () => {
          this.router.navigate(['/candidates/my-profile']);
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });
  }


}
