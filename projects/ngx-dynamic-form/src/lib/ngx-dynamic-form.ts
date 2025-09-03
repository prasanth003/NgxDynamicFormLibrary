import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { iNgxForm } from '../public-api';
import { NgxDynamicFormBootstrap } from 'ngx-dynamic-form-bootstrap';
import { NgxDynamicFormAntd } from 'ngx-dynamic-form-antd';

@Component({
  selector: 'ngx-dynamic-form',
  imports: [
    NgxDynamicFormBootstrap,
    NgxDynamicFormAntd
  ],
  template: `

    @if (type === 'bootstrap') {
      <ngx-dynamic-form-bootstrap [form]="form"></ngx-dynamic-form-bootstrap>
    }

    <ngx-dynamic-form-antd></ngx-dynamic-form-antd>

  `,
  styles: ``
})
export class NgxDynamicForm {

  @Input() public type: string = 'bootstrap';
  @Input() public form!: iNgxForm;

}
