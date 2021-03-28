import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'clases',
        component: ClasesComponent
      }
    ]
  }
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
