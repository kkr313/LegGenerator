import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL3fileComponent } from './lcl-l3file.component';

describe('LclL3fileComponent', () => {
  let component: LclL3fileComponent;
  let fixture: ComponentFixture<LclL3fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL3fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL3fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
