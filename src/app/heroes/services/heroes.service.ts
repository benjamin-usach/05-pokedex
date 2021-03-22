import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Pokemon } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl: String = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemon(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.baseUrl}/pokemon`);

  }

  getPokemonInfo(id: Number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }

  getSugerencias(termino: String): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${ this.baseUrl }/pokemon?q=${ termino }&_limit=6`);
  }

  postPokemon(pokemon: Pokemon){
    return this.http.post<Pokemon>(`${this.baseUrl}/pokemon`, pokemon);

  }

  updatePokemon(pokemon: Pokemon){
    return this.http.put<Pokemon>(`${this.baseUrl}/pokemon/${pokemon.id}`, pokemon);

  }

  deletePokemon(pokemon: Pokemon){
    return this.http.delete(`${this.baseUrl}/pokemon/${pokemon.id}`);
  }


}
