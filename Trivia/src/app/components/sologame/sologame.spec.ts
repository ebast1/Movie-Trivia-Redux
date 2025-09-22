import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sologame } from './sologame';

describe('Sologame', () => {
  let component: Sologame;
  let fixture: ComponentFixture<Sologame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sologame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sologame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
