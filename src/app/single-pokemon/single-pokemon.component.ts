import { SearchPokemonService } from './../service/search-pokemon.service';
import { Pokemon } from './../models/pokemon';
import { POKEMONS } from './../bdd/pokemons-list';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
  pokemon:any;
  public pokemons:Pokemon[]=[];
   //pokemon: Pokemon = new Pokemon();
 


  constructor(private route: ActivatedRoute, private router:Router, private pokemonService : SearchPokemonService, private dataService: SearchPokemonService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params['id'];
   //this.pokemon=this.pokemonService.getPokemon(id);
   this.pokemon=this.pokemonService.getPokemon(id).subscribe(data => {
     this.pokemon = data;
   });
  }
  goBack(): void {
    this.router.navigate(['']);
  }
  remove(){
    this.pokemonService.deletePokemon(this.pokemon).subscribe(_=> this.goBack())
  }
 

  // remove(){
  //   let i = this.pokemonService.getPokemons().indexOf(this.pokemon);
  //   if(i !== -1){
  //     this.pokemonService.getPokemons().splice(i, 1);
  //     this.goBack();
  //   }
 }   


