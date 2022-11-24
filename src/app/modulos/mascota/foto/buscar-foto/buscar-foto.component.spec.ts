import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFotoComponent } from './buscar-foto.component';

describe('BuscarFotoComponent', () => {
  let component: BuscarFotoComponent;
  let fixture: ComponentFixture<BuscarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
