import { Component, Input } from '@angular/core';
import { PositionResponse } from '../../../../services/models';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-position-card-candidate',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './position-card-candidate.component.html',
  styleUrl: './position-card-candidate.component.scss'
})
export class PositionCardCandidateComponent {
  private _position: PositionResponse = {};

  constructor(
    private router: Router
  ){}

  get position(): PositionResponse{
    return this._position;
  }
  
  @Input()
  set position(value: PositionResponse) {
    this._position = value;
  }

  ApplyForm() {
    this.router.navigate(['candidates/apply-for-position', this._position.id]);
  }

}
