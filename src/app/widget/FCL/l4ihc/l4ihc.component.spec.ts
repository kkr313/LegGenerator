import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L4ihcComponent } from './l4ihc.component';

describe('L4ihcComponent', () => {
  let component: L4ihcComponent;
  let fixture: ComponentFixture<L4ihcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L4ihcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L4ihcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
