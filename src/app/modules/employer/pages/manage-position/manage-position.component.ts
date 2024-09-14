import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PositionDto } from '../../../../services/models';
import { PositionService } from '../../../../services/services';

@Component({
  selector: 'app-manage-position',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './manage-position.component.html',
  styleUrl: './manage-position.component.scss'
})
export class ManagePositionComponent implements OnInit{

  errorMsg: Array<string> = [];
  positionRequest: PositionDto = {
    Location: '',
    description: '',
    offerId: 0,
    requirements: '',
    salary: 0,
    skills: '',
    title: ''
  };

  constructor(
    private positionService: PositionService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    const offerId = this.activateRoute.snapshot.params['offerId'];
    if (offerId) {
      this.positionRequest.offerId = offerId;
    }
    const positionId = this.activateRoute.snapshot.params['positionId'];
    if (positionId) {
      this.positionService.findPositionById({
        'position-id': positionId
      }).subscribe({
        next: (position) => {
         this.positionRequest = {
           id: position.id,
           title: position.title as string,
           description: position.description as string,
           requirements: position.requirements as string,
           skills: position.skills as string,
           Location: position.location as string,
           salary: position.salary,
           offerId: position.offerId ?? 0
         };
        }
      });
    }
  }

  savePosition() {
    this.positionService.savePosition({
      body: this.positionRequest
    }).subscribe({
        next: () => {
          this.router.navigate(['/employers/position-list/',this.positionRequest.offerId]);
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });
  }
  cancelPosition() {
    this.router.navigate(['/employers/position-list/',this.positionRequest.offerId]);
  }

}
