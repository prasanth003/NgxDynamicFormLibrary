import { Component, HostListener, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { iNgxForm, NgxDynamicForm, SampleForm } from 'ngx-dynamic-form';
import { Subject } from 'rxjs';
import { InstallationDocument } from './installation-document/installation-document';
import { Features } from './features/features';
import { Example } from './example/example';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    InstallationDocument,
    Features,
    Example
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('dynamic-form');
  public guideHeight: number = 400;

  @HostListener('window:resize')
  public onResize(): void {
    const navbarHeight: number = 20;
    const spacing: number = 20;
    const availableHeight: number = window.innerHeight - (navbarHeight + spacing);
    this.guideHeight = availableHeight;
  }

  public form: Subject<iNgxForm> = new Subject();

  constructor() { 
    setTimeout(() => {
      this.form.next(SampleForm);
    }, 10);

    this.onResize();
  }

  public goto(): void {}

}
