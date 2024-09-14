import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ExperienceRequest } from '../../../../services/models';
import { EducationService, ExperienceService } from '../../../../services/services';

@Component({
  selector: 'app-manage-experience',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-experience.component.html',
  styleUrl: './manage-experience.component.scss'
})
export class ManageExperienceComponent {
  errorMsg: Array<string> = [];
  experienceRequest: ExperienceRequest = {
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  saveExperience() {
    this.experienceService.saveExperience({
      body: this.experienceRequest
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
