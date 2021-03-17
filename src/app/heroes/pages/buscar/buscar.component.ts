import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Pokemon } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: String = "";
  pokemon: Pokemon[] = [];
  pokemonSeleccionado!: Pokemon;


  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino).subscribe( pkmn =>{
      this.pokemon = pkmn;
      if(this.pokemon.length === 0){
        this.pokemonSeleccionado = null!;
      }
      });

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){

    if(this.pokemon.length === 0){
      console.log(this.pokemon.length);
      return;
    }
  
    const pokemon: Pokemon = event.option.value;
    this.termino = pokemon.name.english;

    this.heroesService.getPokemonInfo( pokemon.id! ).subscribe(
      pkmn => this.pokemonSeleccionado = pkmn

    )
  }


}
