import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-overview',
  imports: [
    NzCardModule,
    NzTypographyModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {

  public features = [
    {
      title: 'Schema-Based Configuration',
      description: 'Define forms using simple JSON schema without writing repetitive code.',
      icon: 'control'
    },
    {
      title: 'Reactive Forms Integration',
      description: 'Leverages Angular Reactive Forms to enable dynamic validations and reactive states.',
      icon: 'api'
    },
    {
      title: 'UI Framework Agnostic',
      description: 'Works with TailwindCSS, NG-ZORRO, Angular Material, and your custom components.',
      icon: 'layout'
    },
    {
      title: 'Built-in Validation',
      description: 'Easily configure required fields, min/max lengths, patterns, and custom validators.',
      icon: 'safety-certificate'
    },
    {
      title: 'Custom Field Types',
      description: 'Support for input, select, checkbox, datepicker, textarea, custom templates and more.',
      icon: 'tool'
    },
    {
      title: 'Conditional Logic',
      description: 'Show/hide, enable/disable, or update controls based on dynamic conditions.',
      icon: 'control'
    }
  ];

}
