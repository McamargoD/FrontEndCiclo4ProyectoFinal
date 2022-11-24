import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPrecioComponent } from './buscar-precio.component';

describe('BuscarPrecioComponent', () => {
  let component: BuscarPrecioComponent;
  let fixture: ComponentFixture<BuscarPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPrecioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
