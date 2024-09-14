import { Component, Input } from '@angular/core';
import { OfferResponse } from '../../../../services/models';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss'
})
export class OfferCardComponent {

  constructor(
    private router: Router
  ){}
  navigateToPositions() {
    this.router.navigate(['/candidates/position-list', this._offer.id]);
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
