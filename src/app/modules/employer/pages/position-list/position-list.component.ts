import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PositionResponse } from '../../../../services/models';
import { PositionCardComponent } from "../../components/position-card/position-card.component";
import { PositionService } from '../../../../services/services';

@Component({
  selector: 'app-position-list',
  standalone: true,
  imports: [RouterModule, CommonModule, PositionCardComponent],
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss'
})
export class PositionListComponent implements OnInit{
  
  positionResponses : Array<PositionResponse> = [];
  constructor(
    private positionService: PositionService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.findPositionByOffer();
  }
  private findPositionByOffer() {
    this.positionService.findAllPositionsByOffer({
      'offer-id': this.activateRoute.snapshot.params['offerId']
    }).subscribe({
      next: (positions)=>{
        this.positionResponses = positions;
      }
    })
  }
  toAddPosition() {
    const offerId = this.activateRoute.snapshot.params['offerId'];
    this.router.navigate([`/employers/manage-position/${offerId}`]);
  }

}
