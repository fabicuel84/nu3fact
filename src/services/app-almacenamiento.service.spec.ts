import { TestBed } from '@angular/core/testing';

import { AppAlmacenamientoService } from './app-almacenamiento.service';

describe('AppAlmacenamientoService', () => {
  let service: AppAlmacenamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAlmacenamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
