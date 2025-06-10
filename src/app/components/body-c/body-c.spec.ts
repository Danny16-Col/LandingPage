import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyC } from './body-c';

describe('BodyC', () => {
  let component: BodyC;
  let fixture: ComponentFixture<BodyC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
