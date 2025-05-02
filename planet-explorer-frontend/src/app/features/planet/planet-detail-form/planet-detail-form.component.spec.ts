import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailFormComponent } from './planet-detail-form.component';

describe('PlanetDetailFormComponent', () => {
  let component: PlanetDetailFormComponent;
  let fixture: ComponentFixture<PlanetDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
