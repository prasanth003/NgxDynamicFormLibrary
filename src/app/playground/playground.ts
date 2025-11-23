import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDynamicForm } from '@ngx-dynamic-form/ngx-dynamic-form';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { NgxDynamicFormBootstrap } from '@ngx-dynamic-form/ngx-dynamic-form-bootstrap';
import { NgxDynamicFormAntd } from '@ngx-dynamic-form/ngx-dynamic-form-antd';
import { NgxDynamicFormMaterial } from '@ngx-dynamic-form/ngx-dynamic-form-material';

@Component({
  selector: 'app-playground',
  imports: [
    MonacoEditorModule,
    FormsModule,
    NgxDynamicFormBootstrap,
    NgxDynamicFormAntd,
    NgxDynamicFormMaterial
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

  public editorOptions = {
    theme: 'vs-dark',
    language: 'html',
    automaticLayout: true,
    autoIndent: 'full',
    readOnly: true,
    scroll: false,
    lineNumbers: false,
    minimap: {
      enabled: false
    },
    scrollBeyondLastColumn: 0,
    scrollBeyondLastLine: false,
    roundedSelection: false
  }

  public guideHeight: number = 400;

  public form: NgxDynamicForm = {
    formGroup: [
      {
        formControlName: 'firstName',
        label: 'First Name',
        fieldType: 'input',
        required: true,
        column: 12,
        placeholder: 'Enter your first name',
        value: '',
        disabled: false,
        options: [
          {
            key: 'option1',
            value: 'Option 1'
          },
          {
            key: 'option2',
            value: 'Option 2'
          },
          {
            key: 'option3',
            value: 'Option 3'
          }
        ],
        validations: [
          {
            name: 'required',
            type: 'required',
            message: 'First name is required'
          },
          {
            name: 'string',
            type: 'pattern',
            pattern: '^[a-zA-Z]+$',
            message: 'First name can only contain letters'
          },
          {
            name: 'minLength',
            type: 'minLength',
            value: 2,
            message: 'First name must be at least 2 characters long'
          },
          {
            name: 'maxLength',
            type: 'maxLength',
            value: 10,
            message: 'First name cannot be more than 10 characters long'
          }
        ]
      }
    ],
    style: {
      button: {
        name: 'Submit',
        customClass: 'btn-primary'
      }
    }
  };

  public formInString: string = JSON.stringify(this.form, null, 4);

  @HostListener('window:resize')
  public onResize(): void {
    const navbarHeight: number = 20;
    const spacing: number = 20;
    const availableHeight: number = window.innerHeight - (navbarHeight + spacing);
    this.guideHeight = availableHeight;
  }

  constructor() {
    this.onResize();
  }

  public onChange(form: string): void {
    console.log('form', form);
  }

  public onCodeChange(code: string): void {
    this.form = JSON.parse(code);
  }

}
