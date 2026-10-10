import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ami } from './ami';

describe('Ami', () => {
  let component: Ami;
  let fixture: ComponentFixture<Ami>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ami],
    }).compileComponents();

    fixture = TestBed.createComponent(Ami);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
