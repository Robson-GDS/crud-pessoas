import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IPessoa } from '../interface/IPessoa';
import { Observable } from 'rxjs';
import { PessoasService } from '../service/pessoas.service';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {
  pessoas: Observable<IPessoa[]>;
  displayedColumns = ['id', 'name', 'role', 'age', 'email', 'isActive', 'country', 'experience'];

  constructor(private pessoasService: PessoasService) {
    this.pessoas = this.pessoasService.list();
  }
}
