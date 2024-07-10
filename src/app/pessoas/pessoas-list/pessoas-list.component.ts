import { Component, Input } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
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
    MatTableModule
  ],
  templateUrl: './pessoas-list.component.html',
  styleUrl: './pessoas-list.component.scss'
})
export class PessoasListComponent {
  @Input() pessoas: Observable<IPessoa[]>;
  displayedColumns = ['name', 'role', 'age', 'email', 'isActive', 'country', 'experience', 'actions'];

  constructor(
    private pessoasService: PessoasService,
    private router: Router
  ) {
    this.pessoas = this.pessoasService.list();
  }

  onAdd() {
    this.router.navigate(['new']);
  }

  onEdit(pessoa: IPessoa) {
    this.router.navigate(['edit', pessoa.id])
  }
}
