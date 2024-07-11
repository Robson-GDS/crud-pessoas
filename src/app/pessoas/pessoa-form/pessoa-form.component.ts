import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PessoasService } from '../service/pessoas.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IPessoa } from '../interface/IPessoa';

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
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss'
})
export class PessoaFormComponent {

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(100)]),
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    isActive: new FormControl(false, Validators.required),
  });

  constructor(
    private service: PessoasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const pessoa: IPessoa = this.route.snapshot.data['pessoa'];
    this.form.setValue({
      id: pessoa.id,
      name: pessoa.name,
      role: pessoa.role,
      age: pessoa.age,
      email: pessoa.email,
      country: pessoa.country,
      experience: pessoa.experience,
      isActive: pessoa.isActive
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const formValue = this.form.value;
    this.service.save(formValue as Partial<IPessoa>).subscribe(result => {
      console.log(result)
      this.snackBar.open('Dados salvo com sucesso.', '', { duration: 3000});
      this.onCancel();
    })
  }

  onCancel() {
    this.location.back();
  }

  errorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if(field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if(field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo do campo é ${requiredLength}`;
    }

    if(field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo do campo é ${requiredLength}`;
    }

    if (field?.hasError('min')) {
      return 'A idade precisa ser positiva';
    }

    if (field?.hasError('email')) {
      return 'É necessário entrar com um email válido';
    }

    return 'Campo Invalido';
  }
}
