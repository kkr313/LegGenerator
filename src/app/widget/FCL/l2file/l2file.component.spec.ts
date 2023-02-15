import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2fileComponent } from './l2file.component';

describe('L2fileComponent', () => {
  let component: L2fileComponent;
  let fixture: ComponentFixture<L2fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L2fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
