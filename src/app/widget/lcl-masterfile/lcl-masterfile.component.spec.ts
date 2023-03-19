import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclMasterfileComponent } from './lcl-masterfile.component';

describe('LclMasterfileComponent', () => {
  let component: LclMasterfileComponent;
  let fixture: ComponentFixture<LclMasterfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclMasterfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclMasterfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
