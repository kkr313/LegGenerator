import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirMasterfileComponent } from './air-masterfile.component';

describe('AirMasterfileComponent', () => {
  let component: AirMasterfileComponent;
  let fixture: ComponentFixture<AirMasterfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirMasterfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirMasterfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
