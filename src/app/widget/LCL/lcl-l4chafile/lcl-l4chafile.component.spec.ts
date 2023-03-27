import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL4chafileComponent } from './lcl-l4chafile.component';

describe('LclL4chafileComponent', () => {
  let component: LclL4chafileComponent;
  let fixture: ComponentFixture<LclL4chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL4chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL4chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
