import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclAccordionComponent } from './lcl-accordion.component';

describe('LclAccordionComponent', () => {
  let component: LclAccordionComponent;
  let fixture: ComponentFixture<LclAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
