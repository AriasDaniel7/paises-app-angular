import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  public paises: Paises[] = [];
  public isLoading: boolean = false;
  public busqueda: string = '';


  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paises = this.paisesService.cacheStore.porPais.paises;
    this.busqueda = this.paisesService.cacheStore.porPais.busqueda;
  }

  busquedaPorPais(pais: string) {
    this.isLoading = true;
    if (pais.length === 0) {
      this.paises = [];
      this.isLoading = false;
      return;
    };
    this.paisesService.buscarPorPais(pais)
      .subscribe(paises => {
        this.paises = paises;
        this.isLoading = false;
      })
  }
}
