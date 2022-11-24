import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecieComponent } from './editar-especie.component';

describe('EditarEspecieComponent', () => {
  let component: EditarEspecieComponent;
  let fixture: ComponentFixture<EditarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
