import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProfileResponse } from '../../../../services/models';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  private _profile: ProfileResponse = {};

  constructor(
    private router: Router
  ){}

  get profile(): ProfileResponse{
    return this._profile;
  }
  
  @Input()
  set profile(value: ProfileResponse) {
    this._profile = value;
  }


  Update() {
  throw new Error('Method not implemented.');
  }

}
