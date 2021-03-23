import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDynamicFormComponent } from './ngx-dynamic-form.component';



@NgModule({
  declarations: [NgxDynamicFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [NgxDynamicFormComponent]
})
export class NgxDynamicFormModule { }
