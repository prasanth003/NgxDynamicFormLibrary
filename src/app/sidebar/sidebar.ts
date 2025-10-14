import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { iMenu } from './menu.interface';

const documents: iMenu[] = [
  {
    menu: 'General',
    path: '',
    isGroup: true
  },
  {
    menu: 'Overview',
    path: '/docs/overview',
    isGroup: false
  },
  {
    menu: 'Getting Started',
    path: '/docs/getting-started',
    isGroup: false
  },
  {
    menu: 'Schema',
    path: '/docs/getting-started',
    isGroup: false
  },
  {
    menu: 'Theming',
    path: '/docs/theming',
    isGroup: false
  },
  {
    menu: 'Styling Variables',
    path: '/docs/variables',
    isGroup: false
  },
  {
    menu: 'Ant Design Forms',
    path: '',
    isGroup: true
  },
  {
    menu: 'Simple Forms',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Form Controls',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Validation',
    path: '/docs/validation',
    isGroup: false
  },
  {
    menu: 'Conditional Logic',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Custom Fields',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Customization',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Material Design Forms',
    path: '',
    isGroup: true
  },
  {
    menu: 'Simple Forms',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Form Controls',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Validation',
    path: '/docs/validation',
    isGroup: false
  },
  {
    menu: 'Conditional Logic',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Custom Fields',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Customization',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Bootstrap Forms',
    path: '',
    isGroup: true
  },
  {
    menu: 'Simple Forms',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Form Controls',
    path: '/docs/form-controls',
    isGroup: false
  },
  {
    menu: 'Validation',
    path: '/docs/validation',
    isGroup: false
  },
  {
    menu: 'Conditional Logic',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Custom Fields',
    path: '/docs/conditional-logic',
    isGroup: false
  },
  {
    menu: 'Customization',
    path: '/docs/conditional-logic',
    isGroup: false
  }
];


@Component({
  selector: 'sidebar',
  imports: [
    NzMenuModule,
    RouterModule
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  public menuItems: iMenu[] = documents;
}
