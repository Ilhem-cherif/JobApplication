import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApplicationService } from '../../../../services/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-apply-for-position',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './apply-for-position.component.html',
  styleUrl: './apply-for-position.component.scss'
})
export class ApplyForPositionComponent {

  errorMsg: Array<string> = [];
  selectedFile: File | null = null;

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.selectedFile) {
      const positionId = this.activatedRoute.snapshot.params['positionId'];

      // Call the generated service method
      this.applicationService.saveApplication({ 'position-id': positionId, body: {
        file: this.selectedFile
      } })
        .subscribe(
          response => {
            console.log('Upload success:', response);
          },
          error => {
            console.error('Upload error:', error);
          }
        );
    } else {
      alert('Please select a file first!');
    }
  }
  

}
