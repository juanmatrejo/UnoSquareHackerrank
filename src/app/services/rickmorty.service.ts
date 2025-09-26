import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRickAndMorty } from '../models/rickAndMorty.model';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  constructor(private _httpClient: HttpClient) {
  }

  getCharacters(apiUrl: string): Observable<IRickAndMorty> {
    return this._httpClient.get<IRickAndMorty>(apiUrl);
  }
}