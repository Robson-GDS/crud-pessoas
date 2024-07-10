import { Component, Input } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { IPessoa } from '../interface/IPessoa';
import { PessoasService } from '../service/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  templateUrl: './pessoas-list.component.html',
  styleUrl: './pessoas-list.component.scss'
})
export class PessoasListComponent {
  @Input() pessoas: Observable<IPessoa[]>;
  displayedColumns = ['name', 'role', 'age', 'email', 'isActive', 'country', 'experience', 'actions'];

  constructor(
    private pessoasService: PessoasService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.pessoas = this.pessoasService.list();
  }

  onAdd() {
    this.router.navigate(['new']);
  }

  refresh() {
    this.pessoas = this.pessoasService.list();
  }

  onEdit(pessoa: IPessoa) {
    this.router.navigate(['edit', pessoa.id]);
  }

  onDelete(pessoa: IPessoa) {
    this.pessoasService.delete(pessoa.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Dados removidos com com sucesso.', '', { duration: 3000});
      }
    );
  }
}
