import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../types/paises.type';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    porCapital: { busqueda: '', paises: [] },
    porPais: { busqueda: '', paises: [] },
    porRegion: { region: '', paises: [] }
  }

  constructor(private http: HttpClient) {
    this.cargarLocalStorage();
  }

  private busquedaRequest(url: string): Observable<Paises[]> {
    return this.http.get<Paises[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  guardarLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  cargarLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  buscarPorPais(pais: string): Observable<Paises[]> {
    const url = `${this.apiUrl}/name/${pais}`;
    return this.busquedaRequest(url)
      .pipe(
        tap(paises => this.cacheStore.porPais = { busqueda: pais, paises }),
        tap(() => this.guardarLocalStorage())
      );
  }

  buscarPorCapital(capital: string): Observable<Paises[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.busquedaRequest(url)
      .pipe(
        tap(paises => this.cacheStore.porCapital = { busqueda: capital, paises }),
        tap(() => this.guardarLocalStorage())
      );;
  }

  buscarPorRegion(region: Region): Observable<Paises[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.busquedaRequest(url).pipe(
      tap(paises => this.cacheStore.porRegion = { region, paises }),
      tap(() => this.guardarLocalStorage())
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Paises | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Paises[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)),
      );
  }

}
