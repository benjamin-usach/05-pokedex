import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";


import { HeroesRoutingModule } from './classroom-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ClasesComponent } from './pages/clases/clases.component';
import { HomeComponent } from './pages/home/home.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { ReportsComponent } from './pages/reports/reports.component';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: '935571191997-ilkliloo5l37m7vasf54b689n14g3qdd.apps.googleusercontent.com',
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: ['https://www.googleapis.com/auth/classroom.courses.readonly',
          'https://www.googleapis.com/auth/classroom.rosters',
          'https://www.googleapis.com/auth/classroom.profile.emails',
          'https://www.googleapis.com/auth/classroom.courses',
          'https://www.googleapis.com/auth/classroom.coursework.students' ].join(" ") 
};


@NgModule({
  declarations: [
    HomeComponent, 
    ClasesComponent, TeachersComponent, StudentsComponent, ReportsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ]
})
export class ClassroomModule { }
