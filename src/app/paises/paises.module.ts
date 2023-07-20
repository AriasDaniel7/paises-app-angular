import { NgModule } from '@angular/core';
import { PorCapitalComponent } from './page/por-capital/por-capital.component';
import { CommonModule } from '@angular/common';
import { PaisesRoutingModule } from './paises-routing.module';
import { PorPaisComponent } from './page/por-pais/por-pais.component';
import { PorRegionComponent } from './page/por-region/por-region.component';
import { SharedModule } from '../shared/shared.module';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { PorIdComponent } from './page/por-id/por-id.component';

@NgModule({
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    TablaPaisesComponent,
    PorIdComponent
  ],
  providers: [],
})
export class PaisesModule { }
