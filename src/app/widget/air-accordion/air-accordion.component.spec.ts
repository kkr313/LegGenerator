import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAccordionComponent } from './air-accordion.component';

describe('AirAccordionComponent', () => {
  let component: AirAccordionComponent;
  let fixture: ComponentFixture<AirAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
