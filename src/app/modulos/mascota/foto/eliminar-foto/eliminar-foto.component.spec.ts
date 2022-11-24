import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFotoComponent } from './eliminar-foto.component';

describe('EliminarFotoComponent', () => {
  let component: EliminarFotoComponent;
  let fixture: ComponentFixture<EliminarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
