import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icono'
})
export class IconoPipe implements PipeTransform {

  transform(id: string | null): string {
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${id}MS.png`;
  }

}