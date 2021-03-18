import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoImagen'
})
export class TipoImagenPipe implements PipeTransform {

  transform(tipo: String): unknown {
    return `../../../../assets/types/${tipo}.webp`;
  }

}
