import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCedulaComponent } from './buscar-cedula.component';

describe('BuscarCedulaComponent', () => {
  let component: BuscarCedulaComponent;
  let fixture: ComponentFixture<BuscarCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
