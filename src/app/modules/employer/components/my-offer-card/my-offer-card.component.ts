import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OfferResponse } from '../../../../services/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-offer-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './my-offer-card.component.html',
  styleUrl: './my-offer-card.component.scss'
})
export class MyOfferCardComponent {
  
  constructor(
    private router: Router
  ){}
  navigateToUpdate() {
    this.router.navigate(['employers', 'manage-offer', this._offer.id])
    }
  navigateToPositions() {
    this.router.navigate(['/employers/position-list', this._offer.id]);
  }

  get offer() : OfferResponse{
    return this._offer;
  }
  
  @Input()
  set offer(value : OfferResponse) {
    this._offer = value;
  }

  private _offer: OfferResponse = {};

}
