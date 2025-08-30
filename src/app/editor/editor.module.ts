import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { MaterialLibModule } from 'src/library/material.lib';
// import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NgxDynamicFormModule } from 'projects/ngx-dynamic-form/src/public-api';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MaterialLibModule,
    // MonacoEditorModule.forRoot(),
    FormsModule,
    NgxDynamicFormModule
  ]
})
export class EditorModule { }
