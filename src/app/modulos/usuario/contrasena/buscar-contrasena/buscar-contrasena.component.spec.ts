import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarContrasenaComponent } from './buscar-contrasena.component';

describe('BuscarContrasenaComponent', () => {
  let component: BuscarContrasenaComponent;
  let fixture: ComponentFixture<BuscarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
