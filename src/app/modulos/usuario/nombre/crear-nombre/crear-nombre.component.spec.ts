import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNombreComponent } from './crear-nombre.component';

describe('CrearNombreComponent', () => {
  let component: CrearNombreComponent;
  let fixture: ComponentFixture<CrearNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
