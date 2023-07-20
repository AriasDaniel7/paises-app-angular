import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private sharedService: SharedService) { }

  get isActivo(): boolean {
    return this.sharedService.isActivo;
  }

  activado() {
    this.sharedService.activado();
  }

  desactivado() {
    this.sharedService.desactivado();
  }

}
