import { Component, OnInit } from '@angular/core';
import { GoogleApiService, GoogleApiConfig } from 'ng-gapi';

import { environment } from 'src/environments/environment';
//import { CoursesService } from '../../services/classroom.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {


  constructor(private gapi: GoogleApiService) {
    
  }

  ngOnInit(): void {
    console.log();
  
  }

}
