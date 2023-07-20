import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  public isActivo: boolean = false;

  constructor() { }

  activado() {
    if(this.isActivo){
      this.isActivo = false;
    }else{
      this.isActivo = true;
    }
  }

  desactivado() {
    this.isActivo = false;
  }

}
