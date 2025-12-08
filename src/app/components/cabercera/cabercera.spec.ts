import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabercera } from './cabercera';

describe('Cabercera', () => {
  let component: Cabercera;
  let fixture: ComponentFixture<Cabercera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabercera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabercera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
