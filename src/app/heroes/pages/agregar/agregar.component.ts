import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Name, Pokemon, Base } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  tipos: String[] = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]
  
  tipo: string[] = ["", ""];

  spatk: number = 0;
  spdef: number = 0;

  nombre: Name = {
    english: "",
    japanese: "",
    chinese: "",
    french: ""
  };

  base: Base = {
    HP: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Attack": 0,
    "Sp. Defense": 0,
    Speed: 0
  };

  pokemon: Pokemon = {
    id: 0,
    name: this.nombre,
    type: this.tipo,
    base: this.base,
    alt_img: ""

  };

  edit: Boolean = false;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.heroesService.getPokemonInfo(id) ))
    .subscribe( pkmn => {
        this.pokemon = pkmn;
        this.nombre = pkmn.name;
        this.base = pkmn.base!;
        this.edit = true;
        this.spatk = pkmn.base?.['Sp. Attack'] || 0;
        this.spdef = pkmn.base?.['Sp. Defense'] || 0;
        console.log(this.edit);
        this.tipo[0] = pkmn.type[0];
        if(pkmn.type[1]){this.tipo[1] = pkmn.type[1]}
        console.log(this.tipo);
      });
  }

  guardar(){
    if(!this.edit){
      this.pokemon.type = this.tipo.filter(Boolean);
      this.base['Sp. Attack'] = this.spatk;
      this.base['Sp. Defense'] = this.spdef;
      this.heroesService.postPokemon(this.pokemon)
        .subscribe( resp => console.log("Post", resp) );
    }
    else if(this.edit){
      this.pokemon.type = this.tipo.filter(Boolean);
      this.base['Sp. Attack'] = this.spatk;
      this.base['Sp. Defense'] = this.spdef;
      console.log(this.tipo);
      this.heroesService.updatePokemon(this.pokemon)
        .subscribe( resp => console.log("Update: ",resp) );
    }

  }

}
