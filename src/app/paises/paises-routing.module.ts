import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PorCapitalComponent } from './page/por-capital/por-capital.component';
import { PorPaisComponent } from './page/por-pais/por-pais.component';
import { PorRegionComponent } from './page/por-region/por-region.component';
import { PorIdComponent } from './page/por-id/por-id.component';

const routes: Routes = [
  {
    path: 'por-capital',
    component: PorCapitalComponent
  },
  {
    path: 'por-pais',
    component: PorPaisComponent
  },
  {
    path: 'por-region',
    component: PorRegionComponent
  },
  {
    path: 'por/:id',
    component: PorIdComponent
  },
  {
    path: '**',
    component: PorCapitalComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class PaisesRoutingModule { }
