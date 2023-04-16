import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL2fileComponent } from './air-l2file.component';

describe('AirL2fileComponent', () => {
  let component: AirL2fileComponent;
  let fixture: ComponentFixture<AirL2fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL2fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL2fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
