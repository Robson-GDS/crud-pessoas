import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { PessoasService } from '../service/pessoas.service';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PessoasService
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      role: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      email: [null, [Validators.email]],
      country: [null],
      experience: [null],
      isActive: []
    });
  }

  onSubmit() {
    // this.service.save(this.form.value);
    // console.log(this.form.value)
    this.service.save(this.form.value).subscribe(result => {
      console.log(result)
    })
  }

  onCancel() {
    
  }
}
