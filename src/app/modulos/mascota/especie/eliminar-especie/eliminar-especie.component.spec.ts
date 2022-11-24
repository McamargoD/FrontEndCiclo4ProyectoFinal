import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEspecieComponent } from './eliminar-especie.component';

describe('EliminarEspecieComponent', () => {
  let component: EliminarEspecieComponent;
  let fixture: ComponentFixture<EliminarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
