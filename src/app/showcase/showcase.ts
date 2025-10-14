import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { iExample } from '../example/example.interface';
import { examples } from '../example/example.content';
import { NgxDynamicForm } from "ngx-dynamic-form";
import { NgxDynamicFormAntd } from 'ngx-dynamic-form-antd';

@Component({
  selector: 'app-showcase',
  imports: [
    CommonModule,
    NzDividerModule,
    NgxDynamicForm,
    NgxDynamicFormAntd
],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss'
})
export class Showcase {

  public examples: iExample[] = examples;

}
