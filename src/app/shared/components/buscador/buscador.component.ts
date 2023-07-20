import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubCription?: Subscription;

  @Output()
  public busqueda = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public valorInicialBusqueda: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncerSubCription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.busqueda.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubCription?.unsubscribe();
  }

  enviarValor(value: string): void {
    this.busqueda.emit(value);
  }

  onKeyPress(value: string): void {
    this.debouncer.next(value);
  }
}
