import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDownloadbtnComponent } from './air-downloadbtn.component';

describe('AirDownloadbtnComponent', () => {
  let component: AirDownloadbtnComponent;
  let fixture: ComponentFixture<AirDownloadbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirDownloadbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirDownloadbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
