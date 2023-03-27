import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclDownloadbtnComponent } from './lcl-downloadbtn.component';

describe('LclDownloadbtnComponent', () => {
  let component: LclDownloadbtnComponent;
  let fixture: ComponentFixture<LclDownloadbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclDownloadbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclDownloadbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
