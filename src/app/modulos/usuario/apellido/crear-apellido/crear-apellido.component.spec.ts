import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApellidoComponent } from './crear-apellido.component';

describe('CrearApellidoComponent', () => {
  let component: CrearApellidoComponent;
  let fixture: ComponentFixture<CrearApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
