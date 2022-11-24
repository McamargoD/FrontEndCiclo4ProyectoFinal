import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCedulaComponent } from './crear-cedula.component';

describe('CrearCedulaComponent', () => {
  let component: CrearCedulaComponent;
  let fixture: ComponentFixture<CrearCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
