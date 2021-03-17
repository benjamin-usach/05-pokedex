import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pokemon: Pokemon): String { 
    let num: String = pokemon.id!.toString();

    if(num.length === 1){
       num = `00${num}`
    }
    else if(num.length === 2){
      num = `0${num}`
    }
    

    return `../../../../assets/pokemon/${num}.png`;
  }

}
