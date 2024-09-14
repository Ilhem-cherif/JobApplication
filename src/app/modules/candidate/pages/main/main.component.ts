import { Component } from '@angular/core';
import { MenuComponent } from "../../../candidate/components/menu/menu.component";
import { AppComponent } from '../../../../app.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AppComponent, MenuComponent, RouterOutlet,RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
