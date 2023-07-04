import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3slabComponent } from './l3slab.component';

describe('L3slabComponent', () => {
  let component: L3slabComponent;
  let fixture: ComponentFixture<L3slabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L3slabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L3slabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
