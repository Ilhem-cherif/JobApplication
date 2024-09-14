import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PositionResponse } from '../../../../services/models';

@Component({
  selector: 'app-position-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './position-card.component.html',
  styleUrl: './position-card.component.scss'
})
export class PositionCardComponent {

  private _position: PositionResponse = {};

  constructor(
    private router: Router
  ){}

  navigateToUpdate() {
    if (this._position && this._position.id) {
      this.router.navigate([`/employers/edit-position/${this._position.id}`]);
    } else {
      console.error('Position ID is null or undefined');
    }
  }
  navigateToApplication() {
    this.router.navigate([`/employers/app-list/${this._position.id}`])
  }

  get position(): PositionResponse{
    return this._position;
  }
  
  @Input()
  set position(value: PositionResponse) {
    this._position = value;
  }
}
