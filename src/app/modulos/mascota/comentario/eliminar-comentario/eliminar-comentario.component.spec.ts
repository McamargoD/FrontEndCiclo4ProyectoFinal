import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComentarioComponent } from './eliminar-comentario.component';

describe('EliminarComentarioComponent', () => {
  let component: EliminarComentarioComponent;
  let fixture: ComponentFixture<EliminarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
