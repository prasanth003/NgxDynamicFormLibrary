import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {

  public guideHeight: number = 300;

  /* Listing on window resize */
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    const navbarHeight: number = 20;
    const spacing: number = 20;
    const availableHeight: number = window.innerHeight - (navbarHeight + spacing);
    this.guideHeight = availableHeight;
  }
  constructor(
    private router: Router
  ) { 
    this.onResize();
  }

  public goto(): void {
    this.router.navigate(['/editor'])
  }
}
