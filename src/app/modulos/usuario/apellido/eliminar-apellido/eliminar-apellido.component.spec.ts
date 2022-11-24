import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarApellidoComponent } from './eliminar-apellido.component';

describe('EliminarApellidoComponent', () => {
  let component: EliminarApellidoComponent;
  let fixture: ComponentFixture<EliminarApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarApellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
