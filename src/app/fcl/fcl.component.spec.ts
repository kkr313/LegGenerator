import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FclComponent } from './fcl.component';

describe('FclComponent', () => {
  let component: FclComponent;
  let fixture: ComponentFixture<FclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
