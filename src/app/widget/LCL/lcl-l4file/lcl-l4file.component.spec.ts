import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL4fileComponent } from './lcl-l4file.component';

describe('LclL4fileComponent', () => {
  let component: LclL4fileComponent;
  let fixture: ComponentFixture<LclL4fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL4fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL4fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
