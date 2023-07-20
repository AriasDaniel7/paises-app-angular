import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule)
  },
  {
    path: '**',
    redirectTo: 'paises'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
