import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetStatusComponent } from './planet-status.component';

describe('PlanetStatusComponent', () => {
  let component: PlanetStatusComponent;
  let fixture: ComponentFixture<PlanetStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
