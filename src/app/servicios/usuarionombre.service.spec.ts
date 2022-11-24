import { TestBed } from '@angular/core/testing';

import { UsuarionombreService } from './usuario.service';

describe('UsuarionombreService', () => {
  let service: UsuarionombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarionombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
