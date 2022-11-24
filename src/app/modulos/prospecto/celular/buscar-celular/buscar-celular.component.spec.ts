import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCelularComponent } from './buscar-celular.component';

describe('BuscarCelularComponent', () => {
  let component: BuscarCelularComponent;
  let fixture: ComponentFixture<BuscarCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
