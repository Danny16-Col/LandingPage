import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gratuita } from './gratuita';

describe('Gratuita', () => {
  let component: Gratuita;
  let fixture: ComponentFixture<Gratuita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gratuita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gratuita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
