import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL5fileComponent } from './air-l5file.component';

describe('AirL5fileComponent', () => {
  let component: AirL5fileComponent;
  let fixture: ComponentFixture<AirL5fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL5fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL5fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
