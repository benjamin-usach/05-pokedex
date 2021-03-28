import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { ReportsComponent } from './pages/reports/reports.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'clases',
        component: ClasesComponent
      },
      {
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
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
