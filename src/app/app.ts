import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Sidebar } from './sidebar/sidebar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Sidebar,
    RouterOutlet,
    NzBreadCrumbModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit { 
  
  public url = signal('docs');
  public date: Date = new Date();
  public height = signal(window.innerHeight);

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url.set(event.urlAfterRedirects.split('?')[0].split('#')[0].split('/')[1]);
      });

    this.onResize();
  }

  @HostListener('window:resize')
  public onResize(): void {
    const navbarHeight: number = 80;
    const spacing: number = 38;
    const availableHeight: number = window.innerHeight - (navbarHeight + spacing);
    this.height.update(() => availableHeight);
  }

}
