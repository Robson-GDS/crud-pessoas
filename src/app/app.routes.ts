import { Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas/pessoas.component';
import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';

export const routes: Routes = [
  {
    path: '',
    component: PessoasComponent
  },
  {
    path: 'new',
    component: PessoaFormComponent
  }
];
