import { TestBed } from '@angular/core/testing';

import { UsuarioGuard } from './usuario-guard';

describe('UsuarioGuard', () => {
  let service: UsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
