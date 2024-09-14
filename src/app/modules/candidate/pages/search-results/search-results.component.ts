import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageResponseOfferResponse } from '../../../../services/models';
import { JobOfferService } from '../../../../services/services';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferCardComponent } from "../../components/offer-card/offer-card.component";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit{

  searchResult: PageResponseOfferResponse = {};
  query?: string;
  page = 0;
  size = 5;

  constructor(
    private offerService: JobOfferService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    // Retrieve the query params from the URL
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      this.searchOffer();
    });
  }
  private searchOffer() {
    this.offerService.searchOffers({
      query: this.query,
      page: this.page,
      size: this.size
    }).subscribe({
      next: (data) => {
        this.searchResult = data;
      },
      error: (err) =>{
        console.error('Error fetching search results', err);
      }
    });   
  }

}
