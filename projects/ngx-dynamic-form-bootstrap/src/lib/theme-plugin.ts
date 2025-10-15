import { ThemePlugin } from 'ngx-dynamic-form';
import { NgxDynamicFormBootstrap } from './ngx-dynamic-form-bootstrap';

// The plugin definition the core library can dynamically import
export const THEME_PLUGIN: ThemePlugin = {
  name: 'bootstrap',
  providers: [],
  widgets: {
    input: NgxDynamicFormBootstrap
  },
  stylesGlobalSetup() {
    const cssUrls = [
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
      'https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/css/bootstrap-select.min.css'
    ];
    cssUrls.forEach(url => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
      }
    });
  }
};