import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyD } from './body-d';

describe('BodyD', () => {
  let component: BodyD;
  let fixture: ComponentFixture<BodyD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
