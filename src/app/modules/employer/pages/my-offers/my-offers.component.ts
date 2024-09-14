import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MyOfferCardComponent } from "../../components/my-offer-card/my-offer-card.component";
import { PageResponseOfferResponse } from '../../../../services/models';
import { JobOfferService } from '../../../../services/services';

@Component({
  selector: 'app-my-offers',
  standalone: true,
  imports: [CommonModule, RouterModule, MyOfferCardComponent],
  templateUrl: './my-offers.component.html',
  styleUrl: './my-offers.component.scss'
})
export class MyOffersComponent implements OnInit{

  offerResponse: PageResponseOfferResponse = {};
  page = 0;
  size = 5;

  constructor(
    private offerService: JobOfferService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.findOfferByPublisher();
  }
  private findOfferByPublisher() {
    this.offerService.findAllOffersByPublisher({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (offers)=>{
        this.offerResponse = offers;
      }
    })
  }

}
