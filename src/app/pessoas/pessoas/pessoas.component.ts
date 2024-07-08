import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { IPessoa } from '../interface/IPessoa';
import { Observable } from 'rxjs';
import { PessoasService } from '../service/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {
  pessoas: Observable<IPessoa[]>;
  displayedColumns = ['id', 'name', 'role', 'age', 'email', 'isActive', 'country', 'experience', 'actions'];

  constructor(
    private pessoasService: PessoasService,
    private router: Router
  ) {
    this.pessoas = this.pessoasService.list();
  }

  onAdd() {
    this.router.navigate(['new'])
  }
}
