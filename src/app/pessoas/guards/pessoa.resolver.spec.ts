import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pessoaResolver } from './pessoa.resolver';

describe('pessoaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => pessoaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
