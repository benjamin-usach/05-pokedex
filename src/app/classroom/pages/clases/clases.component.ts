import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  constructor(gApi: GoogleApiService) {
    gApi.onLoad().subscribe( () =>{
      
    })

  }

  ngOnInit(): void {
  }

}
