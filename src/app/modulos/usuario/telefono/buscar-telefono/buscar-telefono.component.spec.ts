import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTelefonoComponent } from './buscar-telefono.component';

describe('BuscarTelefonoComponent', () => {
  let component: BuscarTelefonoComponent;
  let fixture: ComponentFixture<BuscarTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTelefonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
