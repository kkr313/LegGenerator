import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclComponent } from './lcl.component';

describe('LclComponent', () => {
  let component: LclComponent;
  let fixture: ComponentFixture<LclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
