import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCorreoComponent } from './eliminar-correo.component';

describe('EliminarCorreoComponent', () => {
  let component: EliminarCorreoComponent;
  let fixture: ComponentFixture<EliminarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
