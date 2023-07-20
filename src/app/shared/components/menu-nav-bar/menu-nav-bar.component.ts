import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-menu-navbar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {

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
