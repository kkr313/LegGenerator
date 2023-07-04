import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2ihcComponent } from './l2ihc.component';

describe('L2ihcComponent', () => {
  let component: L2ihcComponent;
  let fixture: ComponentFixture<L2ihcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2ihcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L2ihcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
