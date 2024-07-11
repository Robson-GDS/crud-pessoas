import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interface/ICountry';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.apiUrl);
  }
}
