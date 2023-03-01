import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1fileComponent } from './l1file.component';

describe('L1fileComponent', () => {
  let component: L1fileComponent;
  let fixture: ComponentFixture<L1fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L1fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L1fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
