import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL2chafileComponent } from './air-l2chafile.component';

describe('AirL2chafileComponent', () => {
  let component: AirL2chafileComponent;
  let fixture: ComponentFixture<AirL2chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL2chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL2chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
