import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCorreoComponent } from './buscar-correo.component';

describe('BuscarCorreoComponent', () => {
  let component: BuscarCorreoComponent;
  let fixture: ComponentFixture<BuscarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
