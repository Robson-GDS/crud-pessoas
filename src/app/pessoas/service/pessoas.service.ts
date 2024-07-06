import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from '../interface/IPessoa';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private readonly API = '/assets/pessoas.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<IPessoa[]>(this.API)
    .pipe(
      first(),
      tap(pessoas => console.log(pessoas))
    );
  }
}
