import { Component, OnInit } from '@angular/core';
import { EntrepriseProfileResponse, RegistrationDto } from '../../../../services/models';
import { AuthenticationService } from '../../../../services/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss'
})
export class ManageProfileComponent implements OnInit{

  errorMsg: Array<string> = [];
  profileRequest: EntrepriseProfileResponse= {
    entrepriseName: '',
    entrepriseDescription: '',
    entrepriseLocation: '',
    entrepriseWebsite: ''
  };

  constructor(
    private profileService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const profileId = this.activatedRoute.snapshot.params['profileId'];
    if (profileId) {
      this.profileService.getProfileByEmployer({
      }).subscribe({
        next: (profile) => {
         this.profileRequest = {
           id: profile.id,
           entrepriseName: profile.entrepriseName,
           entrepriseDescription: profile.entrepriseDescription,
           entrepriseLocation: profile.entrepriseLocation,
           entrepriseWebsite : profile.entrepriseWebsite
         };
        }
      });
    }
  }

  saveProfile() {
    /*this.offerService.saveOffer({
      body: this.offerRequest
    }).subscribe({
        next: () => {
          this.router.navigate(['/employers/post-job-offer']);
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });*/
  }

}
