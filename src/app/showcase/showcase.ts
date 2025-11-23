import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { iExample } from '../example/example.interface';
import { examples } from '../example/example.content';
import { NgxDynamicFormBootstrap } from '@ngx-dynamic-form/ngx-dynamic-form-bootstrap';
import { NgxDynamicFormAntd } from '@ngx-dynamic-form/ngx-dynamic-form-antd';
import { NgxDynamicFormMaterial } from '@ngx-dynamic-form/ngx-dynamic-form-material';
import { DynamicFormChangeEvent } from '@ngx-dynamic-form/ngx-dynamic-form';

@Component({
  selector: 'app-showcase',
  imports: [
    CommonModule,
    NzDividerModule,
    NgxDynamicFormBootstrap,
    NgxDynamicFormAntd,
    NgxDynamicFormMaterial
  ],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss'
})
export class Showcase {

  public examples: iExample[] = examples;

  public onFormChange(event: DynamicFormChangeEvent): void {
    console.log('Form Change Event:', event);
  }

}
