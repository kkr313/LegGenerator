import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL3fileComponent } from './air-l3file.component';

describe('AirL3fileComponent', () => {
  let component: AirL3fileComponent;
  let fixture: ComponentFixture<AirL3fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL3fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL3fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
