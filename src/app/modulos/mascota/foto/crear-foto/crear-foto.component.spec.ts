import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFotoComponent } from './crear-foto.component';

describe('CrearFotoComponent', () => {
  let component: CrearFotoComponent;
  let fixture: ComponentFixture<CrearFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
