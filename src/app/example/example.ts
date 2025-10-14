import { Component, computed, effect, Input, signal } from '@angular/core';
import { examples } from './example.content';
import { iExample } from './example.interface';
import { iNgxForm, NgxDynamicForm } from 'ngx-dynamic-form';
import { CommonModule } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'examples',
  imports: [
    CommonModule,
    MonacoEditorModule,
    MatTabsModule,
    FormsModule,
    NgxDynamicForm
  ],
  templateUrl: './example.html',
  styleUrl: './example.scss'
})
export class Example {

  @Input() public height: number = 400;
  public examples: iExample[] = examples;

  public a = signal(0);
  public b = signal(1);

  public c = computed(() => this.a() + this.b());

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
  
  constructor() {
    console.log(this.c());
    this.a.set(2);

    effect(() => {
      console.log(`Effect: ${this.c()}`);
    }, { allowSignalWrites: true }  );
  }

  public getCode(form: iNgxForm): string {
    return JSON.stringify(form, null, 4);
  }

  public getSubjectCode(form: iNgxForm): Observable<iNgxForm> { 
    return new Observable<iNgxForm>(observer => {
      observer.next(form);
      observer.complete();
    });
  }
}
