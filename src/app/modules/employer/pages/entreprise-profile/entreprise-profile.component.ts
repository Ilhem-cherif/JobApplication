import { Component, OnInit } from '@angular/core';
import { EntrepriseProfileResponse } from '../../../../services/models';
import { AuthenticationService } from '../../../../services/services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";

@Component({
  selector: 'app-entreprise-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ProfileCardComponent],
  templateUrl: './entreprise-profile.component.html',
  styleUrl: './entreprise-profile.component.scss'
})
export class EntrepriseProfileComponent implements OnInit{
  entrepriseProfile : EntrepriseProfileResponse = {};
  constructor(
    private authenticationService : AuthenticationService
  ){

  }
  ngOnInit(): void {
    this.loadProfile();
  }
  loadProfile() {
    this.authenticationService.getProfileByEmployer().subscribe({
      next: (response: EntrepriseProfileResponse) => {
        this.entrepriseProfile = response;
      }
    });
  }


}
