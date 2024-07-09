import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from '../interface/IPessoa';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  API = 'http://localhost:3000/pessoas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<IPessoa[]>(this.API)
    .pipe(
      first()
    );
  }

  findById(id: string) {
    return this.httpClient.get<IPessoa>(`${this.API}/${id}`);
  }

  save(pessoa: any) {
    return this.httpClient.post<IPessoa>(this.API, pessoa);
  }
}
