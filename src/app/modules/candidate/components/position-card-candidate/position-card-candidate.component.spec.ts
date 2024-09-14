import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCardCandidateComponent } from './position-card-candidate.component';

describe('PositionCardCandidateComponent', () => {
  let component: PositionCardCandidateComponent;
  let fixture: ComponentFixture<PositionCardCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionCardCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionCardCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
