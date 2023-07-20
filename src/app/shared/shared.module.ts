import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    BuscadorComponent,
    LoadingComponent
  ],
  declarations: [
    NavBarComponent,
    MenuNavBarComponent,
    BuscadorComponent,
    LoadingComponent
  ],
  providers: []
})

export class SharedModule { }
