import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'navbar',
  imports: [
    NzMenuModule,
    RouterModule
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  public isOpen = signal(false);

  public toggle() { this.isOpen.update(v => !v); }
  public close() { this.isOpen.set(false); }

}
