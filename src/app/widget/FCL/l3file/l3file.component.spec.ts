import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3fileComponent } from './l3file.component';

describe('L3fileComponent', () => {
  let component: L3fileComponent;
  let fixture: ComponentFixture<L3fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L3fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L3fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
