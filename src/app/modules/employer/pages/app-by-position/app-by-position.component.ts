import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../../../services/models';
import { ApplicationService } from '../../../../services/services';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-by-position',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app-by-position.component.html',
  styleUrl: './app-by-position.component.scss'
})
export class AppByPositionComponent  implements OnInit{
  applications: ApplicationResponse[] = [];
  errorMsg: string = '';

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.findApplicationsByPosition({
      'position-id': this.activatedRoute.snapshot.params['positionId']
    }
    ).subscribe({
        next: (response) => {
          this.applications = response;
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });
  }

  downloadCv(applicationId: number, cvName : string): void {
    this.applicationService.downloadCv({ id: applicationId })
      .subscribe({
        next: (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${cvName}`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          console.error('Error downloading CV:', err);
          this.errorMsg = 'Error downloading CV';
        }
      });
  }
  updateStatus(applicationId: number, status: string): void {
    this.applicationService.updateApplicationStatus({
      applicationId, 
      body:status
    }).subscribe({
      next: () => {
        console.log(`Application ${applicationId} status updated to ${status}`);
      },
      error: (err) => {
        console.error('Error updating application status:', err);
        this.errorMsg = 'Error updating application status';
      }
    });
  }


}
