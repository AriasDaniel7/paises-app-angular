import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'paises-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Input()
  public paises: Paises[] = [];
}
