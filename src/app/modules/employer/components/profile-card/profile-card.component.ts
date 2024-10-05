import { Component, Input } from '@angular/core';
import { EntrepriseProfileResponse } from '../../../../services/models';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  private _profile: EntrepriseProfileResponse = {};

  constructor(
    private router: Router
  ){}

  get profile(): EntrepriseProfileResponse{
    return this._profile;
  }
  
  @Input()
  set profile(value: EntrepriseProfileResponse) {
    this._profile = value;
  }


  Update() {
    this.router.navigate(['/employers/manage-profile', this._profile.id]);
  }

}
