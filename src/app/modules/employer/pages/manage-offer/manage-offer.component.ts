import { Component, OnInit } from '@angular/core';
import { JobOfferRequest } from '../../../../services/models';
import { JobOfferService } from '../../../../services/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-offer',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-offer.component.html',
  styleUrl: './manage-offer.component.scss'
})
export class ManageOfferComponent implements OnInit{

  errorMsg: Array<string> = [];
  offerRequest: JobOfferRequest = {
    title: '',
    description: ''
  };

  constructor(
    private offerService: JobOfferService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const offerId = this.activatedRoute.snapshot.params['offerId'];
    if (offerId) {
      this.offerService.findOfferById({
        'offer-id': offerId
      }).subscribe({
        next: (offer) => {
         this.offerRequest = {
           id: offer.id,
           title: offer.title as string,
           description: offer.description as string,
           isConfirmed: offer.confirmed
         };
        }
      });
    }
  }

  saveOffer() {
    this.offerService.saveOffer({
      body: this.offerRequest
    }).subscribe({
        next: () => {
          this.router.navigate(['/employers/post-job-offer']);
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });
  }

}
