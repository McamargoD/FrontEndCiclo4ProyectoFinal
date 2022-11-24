import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrecioComponent } from './editar-precio.component';

describe('EditarPrecioComponent', () => {
  let component: EditarPrecioComponent;
  let fixture: ComponentFixture<EditarPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPrecioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
