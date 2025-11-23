import { APP_INITIALIZER, Provider } from '@angular/core';
import { PackageLoaderService } from '../services/package-loader.service';
import { ThemePlugin } from '../interface/theme-plugin.interface';
import { ACTIVE_THEME } from './token';


export function provideDynamicFormTheme(opts: { theme: 'bootstrap' | 'material' | 'antd' }): Provider[] {
  let plugin: ThemePlugin;

  return [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [PackageLoaderService],
      useFactory: (loader: PackageLoaderService) => async () => {
        plugin = await loader.loadPackage(opts.theme);
      }
    },
    {
      provide: ACTIVE_THEME,
      useFactory: () => plugin
    }
  ];
}