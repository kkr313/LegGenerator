import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L5fileComponent } from './l5file.component';

describe('L5fileComponent', () => {
  let component: L5fileComponent;
  let fixture: ComponentFixture<L5fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L5fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L5fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
