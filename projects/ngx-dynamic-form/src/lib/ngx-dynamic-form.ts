import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { iNgxForm } from '../public-api';
import { NgxDynamicFormBootstrap } from 'ngx-dynamic-form-bootstrap';

@Component({
  selector: 'ngx-dynamic-form',
  imports: [
    NgxDynamicFormBootstrap
  ],
  template: `
    <ngx-dynamic-form-bootstrap [form]="form"></ngx-dynamic-form-bootstrap>
  `,
  styles: ``
})
export class NgxDynamicForm {

  @Input() public type: string = 'bootstrap';

  @Input() public form!: iNgxForm;

}
