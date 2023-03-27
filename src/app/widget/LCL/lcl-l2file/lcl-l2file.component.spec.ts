import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL2fileComponent } from './lcl-l2file.component';

describe('LclL2fileComponent', () => {
  let component: LclL2fileComponent;
  let fixture: ComponentFixture<LclL2fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL2fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL2fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
