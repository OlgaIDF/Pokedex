import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './../bdd/pokemons-list';





export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let pokemons = POKEMONS; // recupere la constante pokemons(liste de tout nos pokemons) et simule une API en local
        return {pokemons};
    }
}