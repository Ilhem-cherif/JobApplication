import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApplicationResponse } from '../../../../services/models';
import { ApplicationService } from '../../../../services/services';

@Component({
  selector: 'app-list-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-applications.component.html',
  styleUrl: './list-applications.component.scss'
})
export class ListApplicationsComponent implements OnInit {
  applications: ApplicationResponse[] = [];
  errorMsg: string = '';

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.findAllApplicationByCandidate()
      .subscribe({
        next: (response) => {
          this.applications = response;
        },
        error: (err) => {
          console.error('Error loading applications:', err);
          this.errorMsg = 'Error loading applications';
        }
      });
  }

  downloadCv(applicationId: number): void {
    this.applicationService.downloadCv({ id: applicationId })
      .subscribe({
        next: (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `cv_${applicationId}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          console.error('Error downloading CV:', err);
          this.errorMsg = 'Error downloading CV';
        }
      });
  }

}
