import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCedulaComponent } from './editar-cedula.component';

describe('EditarCedulaComponent', () => {
  let component: EditarCedulaComponent;
  let fixture: ComponentFixture<EditarCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
