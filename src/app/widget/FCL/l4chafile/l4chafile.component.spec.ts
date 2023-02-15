import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L4chafileComponent } from './l4chafile.component';

describe('L4chafileComponent', () => {
  let component: L4chafileComponent;
  let fixture: ComponentFixture<L4chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L4chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L4chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
