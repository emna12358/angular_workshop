import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConference } from './detail-conference';

describe('DetailConference', () => {
  let component: DetailConference;
  let fixture: ComponentFixture<DetailConference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailConference],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailConference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
