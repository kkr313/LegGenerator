import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclL1fileComponent } from './lcl-l1file.component';

describe('LclL1fileComponent', () => {
  let component: LclL1fileComponent;
  let fixture: ComponentFixture<LclL1fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LclL1fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LclL1fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
