import { Component } from '@angular/core';
import { iNgxForm } from 'projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface';
import { Subject } from 'rxjs';
import { SampleForm } from './sample.form';

@Component({
  selector: 'ngx-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxDynamicFormLibrary';
  public form: Subject<iNgxForm> = new Subject();
  
  constructor() {
    setTimeout(() => {
      this.form.next(SampleForm);
    }, 10);
  }
}
