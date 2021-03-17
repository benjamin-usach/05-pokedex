import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
