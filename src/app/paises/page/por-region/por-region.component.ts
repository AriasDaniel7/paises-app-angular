import { Component, OnInit } from '@angular/core';
import { Region } from '../../types/paises.type';
import { PaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public paises: Paises[] = [];
  public regionSeleccionada?: Region;
  public isLoading: boolean = false;

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regionSeleccionada = this.paisesService.cacheStore.porRegion.region;
    this.paises = this.paisesService.cacheStore.porRegion.paises;
  }

  buscarPorRegion(region: Region) {
    this.isLoading = true;
    this.regionSeleccionada = region;
    this.paisesService.buscarPorRegion(region).subscribe(paises => {
      this.paises = paises;
      this.isLoading = false;
    })
  }
}
