import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL4chafileComponent } from './air-l4chafile.component';

describe('AirL4chafileComponent', () => {
  let component: AirL4chafileComponent;
  let fixture: ComponentFixture<AirL4chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL4chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL4chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
