import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input' 
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule

  ]
})
export class MaterialModule { }