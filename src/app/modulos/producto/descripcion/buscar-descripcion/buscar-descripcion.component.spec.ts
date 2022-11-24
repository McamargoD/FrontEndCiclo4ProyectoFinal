import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDescripcionComponent } from './buscar-descripcion.component';

describe('BuscarDescripcionComponent', () => {
  let component: BuscarDescripcionComponent;
  let fixture: ComponentFixture<BuscarDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
