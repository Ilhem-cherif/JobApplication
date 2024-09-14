import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EducationResponse, ExperienceResponse, ProfileResponse, SkillResponse } from '../../../../services/models';
import { AuthenticationService, EducationService, ExperienceService, SkillService } from '../../../../services/services';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";
import { RouterModule } from '@angular/router';
import {jsPDF} from 'jspdf'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, ProfileCardComponent,RouterModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
  
  candidateProfile: ProfileResponse = {};
  educations: EducationResponse[] = [];
  experiences: ExperienceResponse[] = [];
  skills: SkillResponse[] = [];
  pdfSrc: SafeResourceUrl | null = null;

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private skillService: SkillService,
    private authenticationService: AuthenticationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadEducations();
    this.loadExperiences();
    this.loadSkills();
  }

  loadProfile(): void {
    this.authenticationService.getProfileByCandidate().subscribe({
      next: (response: ProfileResponse) => {
        this.candidateProfile = response;
      }
    });
  }

  loadEducations(): void {
    this.educationService.getAllEducationByCandidate().subscribe((educations) => {
      this.educations = educations;
    });
  }

  loadExperiences(): void {
    this.experienceService.getAllExperienceByCandidate().subscribe((experiences) => {
      this.experiences = experiences;
    });
  }

  loadSkills(): void {
    this.skillService.getAllSkillsByCandidate().subscribe((skills) => {
      this.skills = skills;
    });
  }
  formatDate(dateString: string): string {
    return dateString.split('T')[0];
  }
  generateCV(): void {
    const doc = new jsPDF();
    const lineHeight = 10;
    let yPos = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const text = `${this.candidateProfile.firstName} ${this.candidateProfile.lastName}`;
    const textWidth = doc.getTextWidth(text);
    const xPosition = ((pageWidth-10) - textWidth) / 2;
    doc.setFontSize(22);
    doc.setTextColor(255, 0, 0);
    doc.text(text, xPosition, yPos);
    yPos += lineHeight * 1.5;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica");
    doc.text('• ' + 'Phone: ' + this.candidateProfile.phoneNumber, 10, yPos);
    yPos += lineHeight;
    doc.setFont("helvetica");
    doc.text('• ' + 'Email: ' + this.candidateProfile.email, 10, yPos);
    yPos += lineHeight;
    doc.text('• ' + 'Age: ' + this.candidateProfile.age, 10, yPos);
    yPos += lineHeight;
    const educationDesc = doc.splitTextToSize(this.candidateProfile.personalResume ?? 'No Description Provided', 180);
        doc.text('• ' + `Personal Resume: ${educationDesc}`, 10, yPos);
        yPos += educationDesc.length * lineHeight;
    doc.line(10, yPos, doc.internal.pageSize.width - 10, yPos);
    yPos += lineHeight * 1.5;
    // Education Section
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text('Education', 10, yPos);
    yPos += lineHeight;
    doc.setTextColor(0, 0, 0);
    this.educations.forEach((education, index) => {
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text('• ' + (education.title || 'No Title Provided'), 20, yPos);
        doc.setFont("helvetica", "normal");
        yPos += lineHeight;
        doc.setFontSize(10);
        const educationDesc = doc.splitTextToSize(education.description ?? 'No Description Provided', 180);
        doc.text(educationDesc, 25, yPos);
        yPos += lineHeight * 1.5;
        doc.text( this.formatDate(education.startDate || 'N/A') +  ' /' + this.formatDate(education.endDate || 'N/A'), 25, yPos);
        yPos += lineHeight * 1.5;
        // Add a page break if yPos exceeds page height (around 280 for A4 size)
        if (yPos > 260) {
            doc.addPage();
            yPos = 10; // Reset yPos for the new page
        }
    });
    doc.line(10, yPos, doc.internal.pageSize.getWidth() - 10, yPos);
    yPos += 10;
    // Experience Section
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text('Experience', 10, yPos);
    yPos += lineHeight;
    doc.setTextColor(0, 0, 0);
    this.experiences.forEach((experience, index) => {
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text('• ' + (experience.title || 'No Title Provided'), 20, yPos);
        doc.setFont("helvetica", "normal");
        yPos += lineHeight;
        doc.setFontSize(10);
        const experienceDesc = doc.splitTextToSize(experience.description ?? 'No Description Provided', 180);
        doc.text(experienceDesc, 25, yPos);
        yPos += lineHeight * 1.5;
        doc.text( this.formatDate(experience.startDate || 'N/A') +  ' /' + this.formatDate(experience.endDate || 'N/A'), 25, yPos);
        yPos += lineHeight * 1.5;

        if (yPos > 260) {
            doc.addPage();
            yPos = 10;
        }
    });
    doc.line(10, yPos, doc.internal.pageSize.getWidth() - 10, yPos);
    yPos += 10;
    // Skills Section
    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text('Skills', 10, yPos);
    yPos += lineHeight;
    doc.setTextColor(0, 0, 0);
    this.skills.forEach((skill, index) => {
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text('• ' + (skill.title || 'No Title Provided'), 20, yPos);
        doc.setFont("helvetica", "normal");
        yPos += lineHeight;
        doc.setFontSize(10);
        const skillDesc = doc.splitTextToSize(skill.description ?? 'No Description Provided', 180);
        doc.text(skillDesc, 25, yPos);
        yPos += lineHeight * 1.5;
        doc.setFont("helvetica", "bold");
        doc.text('Level: ' + (skill.level || 'N/A'), 25, yPos);
        doc.setFont("helvetica", "normal");
        yPos += lineHeight * 1.5;

        if (yPos > 260) {
            doc.addPage();
            yPos = 10;
        }
    });

    // Convert to Data URI for preview
    const pdfDataUri = doc.output('datauristring');
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pdfDataUri);

    // Open PDF in a new window for preview
    const previewWindow = window.open("", "_blank");
    previewWindow?.document.write(
        `<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`
    );
}


}
