import { POKEMONS } from './../bdd/pokemons-list';
import { Component, OnInit, Input } from '@angular/core';
import { SearchPokemonService } from './../service/search-pokemon.service';
import { Pokemon } from './../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons = POKEMONS
  @Input() pokemon:any;
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: SearchPokemonService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }
  goBack(): void {
    this.router.navigate(['']);
  }
  // onSubmit(f:NgForm){
  //   console.log(this.pokemon);
  //   let i = this.pokemonService.getPokemons().indexOf(this.pokemon);
  //   if(i == -1){
  //     this.pokemonService.getPokemons().push(this.pokemon);
  //     this.goBack();
  //   }
    
  //     }

      onSubmit(f:NgForm){
      
          this.pokemonService.addPokemon(this.pokemon).subscribe(data =>{
            this.pokemon = data
          });
          let link = ['/single', this.pokemon.id];
          this.router.navigate(link);
          alert("Felicitacion vous venez d\'ajouter" + this.pokemon.name + "à votre pokedex")
        }
        
          }
