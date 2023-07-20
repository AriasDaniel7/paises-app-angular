import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-por-id',
  templateUrl: './por-id.component.html',
  styleUrls: ['./por-id.component.css']
})
export class PorIdComponent implements OnInit {
  public pais?: Paises;

  constructor(
    private paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisesService.searchCountryByAlphaCode(id)),
      ).subscribe(country => {
        if (!country) {
          return this.route.navigateByUrl('');
        }
        return this.pais = country;
      })
  }
}
