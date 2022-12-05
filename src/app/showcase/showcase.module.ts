import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { MaterialLibModule } from 'src/library/material.lib';
import { ExamplesComponent } from './examples/examples.component';
import { FeaturesComponent } from './features/features.component';
import { InstallationDocumentComponent } from './installation-document/installation-document.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NgxDynamicFormModule } from 'projects/ngx-dynamic-form/src/public-api';
import { ExampleSectionComponent } from './example-section/example-section.component';
import { BrowserSupportComponent } from './features/browser-support/browser-support.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    ExamplesComponent,
    FeaturesComponent,
    InstallationDocumentComponent,
    ExampleSectionComponent,
    BrowserSupportComponent,
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MaterialLibModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    NgxDynamicFormModule
  ]
})
export class ShowcaseModule { }
