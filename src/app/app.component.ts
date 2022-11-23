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
  public editorOptions = {theme: 'vs-dark', language: 'json'};
  public code: any = JSON.stringify(SampleForm);
  
  public form: Subject<iNgxForm> = new Subject();
  
  constructor() {
    setTimeout(() => {
      this.form.next(SampleForm);
    }, 10);
  }

  public initEditor(editor: any): void {
    if (editor) {
      setTimeout(() => {
        editor.getAction('editor.action.formatDocument').run();
      }, 100);
    }
  }

}
