import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDescripcionComponent } from './crear-descripcion.component';

describe('CrearDescripcionComponent', () => {
  let component: CrearDescripcionComponent;
  let fixture: ComponentFixture<CrearDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
