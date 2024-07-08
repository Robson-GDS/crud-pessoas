import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from '../interface/IPessoa';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private API = '/assets/pessoas.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<IPessoa[]>(this.API)
    .pipe(
      first(),
      tap(pessoas => console.log(pessoas))
    );
  }

  save(pessoa: IPessoa) {
    // return this.httpClient.post<IPessoa>(this.API, pessoa).subscribe(result => console.log(result));
    return this.httpClient.post<IPessoa>(this.API, pessoa);
  }
}
