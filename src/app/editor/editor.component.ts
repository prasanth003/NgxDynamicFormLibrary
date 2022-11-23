import { Component } from '@angular/core';
import { iNgxForm } from 'projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface';
import { Subject } from 'rxjs';
import { SampleForm } from '../sample.form';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  public editorOptions = {theme: 'vs-light', language: 'json'};
  public code: string = JSON.stringify(SampleForm);
  public form: Subject<iNgxForm> = new Subject();

  public initEditor(editor: any): void {
    if (editor) {
      setTimeout(() => {
        editor.getAction('editor.action.formatDocument').run();
      }, 10);
    }
  }

  public onEditorChange(event: string): void {
    if (event) {
      let form: iNgxForm = JSON.parse(event);
      this.form.next(form);
    }
  }

}
