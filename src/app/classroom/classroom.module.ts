import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';




import { HeroesRoutingModule } from './classroom-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ClasesComponent } from './pages/clases/clases.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent, 
    ClasesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
  ]
})
export class ClassroomModule { }
