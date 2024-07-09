import { ResolveFn } from '@angular/router';
import { PessoasService } from '../service/pessoas.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';

export const pessoaResolver: ResolveFn<boolean | any> = (route, state) => {
  const service = inject(PessoasService);

  if (route.params && route.params['id']) {
    return service.findById(route.params['id']);
  }
  
  return of({ id: '',name: '', role: '', age: 0, email: '', country: '', experience: '', isActive: false });
};