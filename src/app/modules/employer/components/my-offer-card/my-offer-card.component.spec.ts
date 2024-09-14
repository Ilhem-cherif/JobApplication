import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOfferCardComponent } from './my-offer-card.component';

describe('MyOfferCardComponent', () => {
  let component: MyOfferCardComponent;
  let fixture: ComponentFixture<MyOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOfferCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
