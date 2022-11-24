import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTelefonoComponent } from './eliminar-telefono.component';

describe('EliminarTelefonoComponent', () => {
  let component: EliminarTelefonoComponent;
  let fixture: ComponentFixture<EliminarTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTelefonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
