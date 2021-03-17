import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { bufferToggle, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  panelOpenState = false; 

  pokemon!: Pokemon;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
   }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getPokemonInfo(id)))
      .subscribe(pkmn => {
        this.pokemon = pkmn
        //this.radarChartData.push({data: [this.pokemon.base!.HP, this.pokemon.base!.Attack, this.pokemon.base!.Defense, this.pokemon.base!['Sp. Attack'], this.pokemon.base?.['Sp. Defense'], this.pokemon.base!.Speed]});
        for(var i in this.pokemon.name){console.log(this.pokemon.name);} 
      });
    
  }

}
