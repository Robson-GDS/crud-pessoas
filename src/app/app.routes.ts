import { Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas/pessoas.component';
import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';
import { pessoaResolver } from './pessoas/guards/pessoa.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PessoasComponent
  },
  {
    path: 'new',
    component: PessoaFormComponent, resolve: {pessoa: pessoaResolver}
  },
  {
    path: 'edit/:id',
    component: PessoaFormComponent, resolve: {pessoa: pessoaResolver}
  }
];
