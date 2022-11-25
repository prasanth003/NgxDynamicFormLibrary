import { Component, Input } from '@angular/core';

@Component({
  selector: 'installation-document',
  templateUrl: './installation-document.component.html',
  styleUrls: ['./installation-document.component.scss']
})
export class InstallationDocumentComponent {
  
  @Input() public height: number = 300;
  
  public editorOptions = {
    theme: 'vs-dark', 
    language: 'powershell', 
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
  };

  public tsOptions = {
    theme: 'vs-dark', 
    language: 'typescript', 
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

  public htmlEditor = {
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

  public code: string = 'npm install @myndpm/dyn-forms \n# or \nyarn add @myndpm/dyn-forms';

  public importModule: string = "import { DynFormsModule } from '@myndpm/dyn-forms'; \n\n@NgModule({ \n\timports: [ \n\t\tDynFormsModule,\n\t]\n})";

  public usage: string = '<form [formGroup]="form">\n\t<dyn-forms [form]="form" [config]="config" [mode]="mode"></dyn-forms>\n</form>';

  public tsUsage: string = "import { FormGroup } from '@angular/forms';\nimport { DynFormConfig } from '@myndpm/dyn-forms';\nimport { createMatConfig } from '@myndpm/dyn-forms/ui-material';\n\nconst form = new FormGroup({});\n\nconst config: DynFormConfig = {\n\tcontrols: [\n\t\tcreateMatConfig('INPUT', {\n\t\t\tparams: { label: 'My text input' }\n\t\t}),\n\t],\n}"
}
