import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verusgame } from './verusgame';

describe('Verusgame', () => {
  let component: Verusgame;
  let fixture: ComponentFixture<Verusgame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verusgame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verusgame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
