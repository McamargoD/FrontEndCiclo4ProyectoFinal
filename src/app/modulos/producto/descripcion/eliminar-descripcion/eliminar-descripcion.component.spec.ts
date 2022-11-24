import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDescripcionComponent } from './eliminar-descripcion.component';

describe('EliminarDescripcionComponent', () => {
  let component: EliminarDescripcionComponent;
  let fixture: ComponentFixture<EliminarDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
