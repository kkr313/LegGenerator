import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL5fileComponent } from './lcl-l5file.component';

describe('LclL5fileComponent', () => {
  let component: LclL5fileComponent;
  let fixture: ComponentFixture<LclL5fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL5fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL5fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
