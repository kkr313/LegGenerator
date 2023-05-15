import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL1fileComponent } from './air-l1file.component';

describe('AirL1fileComponent', () => {
  let component: AirL1fileComponent;
  let fixture: ComponentFixture<AirL1fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL1fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL1fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
