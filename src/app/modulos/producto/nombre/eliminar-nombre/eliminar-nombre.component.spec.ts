import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNombreComponent } from './eliminar-nombre.component';

describe('EliminarNombreComponent', () => {
  let component: EliminarNombreComponent;
  let fixture: ComponentFixture<EliminarNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
