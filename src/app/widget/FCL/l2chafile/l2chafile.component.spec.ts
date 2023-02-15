import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2chafileComponent } from './l2chafile.component';

describe('L2chafileComponent', () => {
  let component: L2chafileComponent;
  let fixture: ComponentFixture<L2chafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2chafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L2chafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
