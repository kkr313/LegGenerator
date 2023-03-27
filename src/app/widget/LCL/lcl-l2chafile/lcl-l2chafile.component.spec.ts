import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL2chafileComponent } from './lcl-l2chafile.component';

describe('LclL2chafileComponent', () => {
  let component: LclL2chafileComponent;
  let fixture: ComponentFixture<LclL2chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL2chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL2chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
