import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApellidoComponent } from './editar-apellido.component';

describe('EditarApellidoComponent', () => {
  let component: EditarApellidoComponent;
  let fixture: ComponentFixture<EditarApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarApellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
