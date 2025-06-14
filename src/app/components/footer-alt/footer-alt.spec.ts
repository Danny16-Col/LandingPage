import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAlt } from './footer-alt';

describe('FooterAlt', () => {
  let component: FooterAlt;
  let fixture: ComponentFixture<FooterAlt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterAlt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAlt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
