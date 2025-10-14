import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iNgxForm, NgxDynamicForm, SampleForm } from 'ngx-dynamic-form';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-playground',
  imports: [
    NgxDynamicForm,
    MonacoEditorModule,
    FormsModule
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

  public editorOptions = {
    theme: 'vs-dark', 
    language: 'html', 
    automaticLayout: true,
    autoIndent: 'full',
    readOnly: true,
    scroll: false,
    lineNumbers: false,
    minimap: {
      enabled: false
    },
    scrollBeyondLastColumn: 0,
    scrollBeyondLastLine: false,
    roundedSelection: false
  }

  public guideHeight: number = 400;
  public form: iNgxForm = SampleForm;
  public formInString: string = JSON.stringify(this.form, null, 4);

  @HostListener('window:resize')
  public onResize(): void {
    const navbarHeight: number = 20;
    const spacing: number = 20;
    const availableHeight: number = window.innerHeight - (navbarHeight + spacing);
    this.guideHeight = availableHeight;
  }

  constructor() { 
    this.onResize();
  }

  public onChange(form: string): void {
    console.log('form', form);
  }

  public onCodeChange(code: string): void {
    this.form = JSON.parse(code);
  }

}
