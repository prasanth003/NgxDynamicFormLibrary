import { Component } from '@angular/core';
import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { iNgxForm } from 'projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface';
import { Subject } from 'rxjs';
import { SampleForm } from './sample.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title: string = 'NGX Dynamic Form';
  
  constructor() { }

}
