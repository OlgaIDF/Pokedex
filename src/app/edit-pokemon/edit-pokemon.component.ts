import { Component, OnInit, Input } from '@angular/core';
import { SearchPokemonService } from './../service/search-pokemon.service';
import { Pokemon } from './../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  @Input() pokemon: any;
  constructor(private route: ActivatedRoute, private router:Router, private pokemonService : SearchPokemonService, private dataService: SearchPokemonService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params['id'];
   //this.pokemon=this.pokemonService.getPokemon(id);
   this.pokemon=this.pokemonService.getPokemon(id).subscribe(data => {
     this.pokemon = data;
   });
  }
 
  onSubmit(f:NgForm){
    this.pokemonService.upDatePokemon(this.pokemon).subscribe(data => {   // Modification du pokemon via la requet PUT()
      this.pokemon = data
    });
    console.log(this.pokemon);
  }
  
}
