import { POKEMONS } from './../bdd/pokemons-list';
import { Pokemon } from './../models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {
  pokemon: Pokemon = new Pokemon();
  pokemons = POKEMONS;
  private pokemonUrlApi = 'api/pokemons';
  constructor(private http:HttpClient) { }

  // getPokemons():Pokemon[]{
  //   return POKEMONS;
  // }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonUrlApi);
    }
    deletePokemon(pokemon:Pokemon){
      const url=`${this.pokemonUrlApi}/${pokemon.id}`;
      const httpOptions={
        headers: new HttpHeaders({'Content-Type':'application/json'})
        
      }
       return this.http.delete<Pokemon>(url, httpOptions);
     }
upDatePokemon(pokemon:Pokemon){
  const url=`${this.pokemonUrlApi}/${pokemon.id}`;
  const httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
    
  }
   return this.http.put<Pokemon>(url, httpOptions);
 }
 addPokemon(pokemon:Pokemon){
  const url=`${this.pokemonUrlApi}/${pokemon.id}`;
  const httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
    
  }
   return this.http.post<Pokemon>(url, httpOptions);
 }
  // getPokemon(id:number){
  //   let pokemons=this.getPokemons();
  //   for (let i = 0; i < this.pokemons.length; i++) {
  //     if (this.pokemons[i].id == id) {
  //       this.pokemon = this.pokemons[i];
  //     }
  //   }
  //   return this.pokemon;
  // }

  getPokemon(id:number){
    const url=`${this.pokemonUrlApi}/${id}`;
    return this.http.get<Pokemon>(url);
}
}