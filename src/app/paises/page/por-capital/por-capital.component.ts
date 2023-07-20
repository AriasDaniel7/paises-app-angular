import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'paises-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  public paises: Paises[] = [];
  public isLoading: boolean = false;
  public busqueda: string = '';

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paises = this.paisesService.cacheStore.porCapital.paises;
    this.busqueda = this.paisesService.cacheStore.porCapital.busqueda;
  }

  busquedaPorCapital(pais: string) {
    this.isLoading = true;
    if (pais.length === 0) {
      this.paises = [];
      this.isLoading = false;
      return;
    };
    this.paisesService.buscarPorCapital(pais)
      .subscribe(paises => {
        this.paises = paises;
        this.isLoading = false;
      })
  }
}
