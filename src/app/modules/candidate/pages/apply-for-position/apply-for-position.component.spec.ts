import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForPositionComponent } from './apply-for-position.component';

describe('ApplyForPositionComponent', () => {
  let component: ApplyForPositionComponent;
  let fixture: ComponentFixture<ApplyForPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
