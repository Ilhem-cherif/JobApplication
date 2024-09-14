import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { AppComponent } from "../../../../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-employer',
  standalone: true,
  imports: [MenuComponent, AppComponent, RouterOutlet, MenuComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
