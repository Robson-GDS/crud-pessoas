import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from '../interface/IPessoa';
import { first, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

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

  save(pessoa: Partial<IPessoa>): Observable<IPessoa> {
    if(pessoa.id) {
      return this.update(pessoa);
    }
    return this.create(pessoa);
  }

  private create(pessoa: Partial<IPessoa>) {
    return this.httpClient.post<IPessoa>(this.API, { ...pessoa, id: uuidv4() });
  }

  private update(pessoa: Partial<IPessoa>) {
    return this.httpClient.put<IPessoa>(`${this.API}/${pessoa.id}`, pessoa);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
