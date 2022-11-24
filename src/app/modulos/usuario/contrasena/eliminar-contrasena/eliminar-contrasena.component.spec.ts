import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContrasenaComponent } from './eliminar-contrasena.component';

describe('EliminarContrasenaComponent', () => {
  let component: EliminarContrasenaComponent;
  let fixture: ComponentFixture<EliminarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
