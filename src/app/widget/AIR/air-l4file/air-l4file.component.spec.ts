import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirL4fileComponent } from './air-l4file.component';

describe('AirL4fileComponent', () => {
  let component: AirL4fileComponent;
  let fixture: ComponentFixture<AirL4fileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirL4fileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirL4fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
