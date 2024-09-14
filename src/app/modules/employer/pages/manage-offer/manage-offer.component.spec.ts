import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOfferComponent } from './manage-offer.component';

describe('ManageOfferComponent', () => {
  let component: ManageOfferComponent;
  let fixture: ComponentFixture<ManageOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
