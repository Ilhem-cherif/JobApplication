import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../../../../services/services';
import { Router } from '@angular/router';
import { PageResponseOfferResponse } from '../../../../services/models';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from "../../components/offer-card/offer-card.component";

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent implements OnInit{

  offerResponse: PageResponseOfferResponse = {};
  page = 0;
  size = 5;

  constructor(
    private offerService: JobOfferService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.findAllOffers();
  }
  private findAllOffers() {
    this.offerService.findAllOffers({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (offers)=>{
        this.offerResponse = offers;
      }
    })
  }

}
