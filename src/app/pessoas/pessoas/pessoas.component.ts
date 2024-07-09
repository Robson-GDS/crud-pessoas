import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { PessoasListComponent } from '../pessoas-list/pessoas-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    PessoasListComponent
  ],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {
  constructor(
    private router: Router
  ) {
  }

}
