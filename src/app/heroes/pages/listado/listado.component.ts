import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  pokedex: Pokemon[] = []
  

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getPokemon()
      .subscribe(resp =>{
        this.pokedex = resp;

      });
  }

}
