import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L4fileComponent } from './l4file.component';

describe('L4fileComponent', () => {
  let component: L4fileComponent;
  let fixture: ComponentFixture<L4fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L4fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L4fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
