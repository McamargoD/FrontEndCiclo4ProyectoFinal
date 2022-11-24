import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCedulaComponent } from './eliminar-cedula.component';

describe('EliminarCedulaComponent', () => {
  let component: EliminarCedulaComponent;
  let fixture: ComponentFixture<EliminarCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
