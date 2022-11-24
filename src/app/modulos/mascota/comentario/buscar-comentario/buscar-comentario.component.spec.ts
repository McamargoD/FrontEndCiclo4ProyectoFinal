import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComentarioComponent } from './buscar-comentario.component';

describe('BuscarComentarioComponent', () => {
  let component: BuscarComentarioComponent;
  let fixture: ComponentFixture<BuscarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
