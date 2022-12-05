import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxDynamicFormComponent } from './ngx-dynamic-form.component';



@NgModule({
  declarations: [NgxDynamicFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [NgxDynamicFormComponent]
})
export class NgxDynamicFormModule { }
