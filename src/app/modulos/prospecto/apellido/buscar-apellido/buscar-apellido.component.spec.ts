import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarApellidoComponent } from './buscar-apellido.component';

describe('BuscarApellidoComponent', () => {
  let component: BuscarApellidoComponent;
  let fixture: ComponentFixture<BuscarApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarApellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
