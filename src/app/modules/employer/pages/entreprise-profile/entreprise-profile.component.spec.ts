import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseProfileComponent } from './entreprise-profile.component';

describe('EntrepriseProfileComponent', () => {
  let component: EntrepriseProfileComponent;
  let fixture: ComponentFixture<EntrepriseProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepriseProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
