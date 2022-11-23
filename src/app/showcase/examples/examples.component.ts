import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { iNgxForm } from 'projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface';
import { Subject } from 'rxjs';
import { iExample } from 'src/interface/example.interface';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnChanges {
  
  @Input() example: iExample = null as any;

  public editorOptions = {theme: 'vs-light', language: 'json'};
  public code: string = '';
  public form: Subject<iNgxForm> = new Subject();

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['example'] && changes['example'].currentValue) {
      setTimeout(() => { this.form.next(this.example.form); }, 10)
      this.code = JSON.stringify(this.example.form);
    }
  }

  public initEditor(editor: any): void {
    if (editor) {
      setTimeout(() => {
        editor.getAction('editor.action.formatDocument').run();
      }, 10);
    }
  }

  public onTabChanged(event: MatTabChangeEvent): void {
    this.code = JSON.stringify(this.example.form);
    this.editorOptions = {theme: 'vs-light', language: 'json'};
  }

}
