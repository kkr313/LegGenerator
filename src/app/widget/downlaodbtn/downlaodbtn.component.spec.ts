import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlaodbtnComponent } from './downlaodbtn.component';

describe('DownlaodbtnComponent', () => {
  let component: DownlaodbtnComponent;
  let fixture: ComponentFixture<DownlaodbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownlaodbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlaodbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
