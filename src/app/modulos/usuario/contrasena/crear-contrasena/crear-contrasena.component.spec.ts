import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContrasenaComponent } from './crear-contrasena.component';

describe('CrearContrasenaComponent', () => {
  let component: CrearContrasenaComponent;
  let fixture: ComponentFixture<CrearContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
