import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDireccionComponent } from './buscar-direccion.component';

describe('BuscarDireccionComponent', () => {
  let component: BuscarDireccionComponent;
  let fixture: ComponentFixture<BuscarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDireccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
