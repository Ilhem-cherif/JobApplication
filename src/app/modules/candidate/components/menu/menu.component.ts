import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AppComponent,RouterModule,CommonModule,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  searchQuery: string = '';

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    const linkColor = document.querySelectorAll('.nav-link');
        linkColor.forEach(link => {
          if (window.location.href.endsWith(link.getAttribute('href') || '')) {
            link.classList.add('active');
          }
          link.addEventListener('click', () => {
            linkColor.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          });
        });
  }
  onSearch() {
    if (this.searchQuery) {
      this.router.navigate(['/candidates/search-results'], { queryParams: { query: this.searchQuery } });
    }
  }
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

}
