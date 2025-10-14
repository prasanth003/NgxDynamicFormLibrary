import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  (self as any).MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: string, label: string) {
    if (label === 'json') {
      return './assets/monaco/min/vs/language/json/json.worker.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './assets/monaco/min/vs/language/css/css.worker.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './assets/monaco/min/vs/language/html/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './assets/monaco/min/vs/language/typescript/ts.worker.js';
    }
    return './assets/monaco/min/vs/editor/editor.worker.js';
  }
};