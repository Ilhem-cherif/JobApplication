import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppByPositionComponent } from './app-by-position.component';

describe('AppByPositionComponent', () => {
  let component: AppByPositionComponent;
  let fixture: ComponentFixture<AppByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppByPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
