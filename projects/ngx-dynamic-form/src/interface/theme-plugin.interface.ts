import { Provider, Type } from '@angular/core';


export interface ThemeWidgetMap {
  input?: Type<any>;
  select?: Type<any>;
}

export interface ThemePlugin {
  name: 'material' | 'bootstrap' | 'antd' | (string & {});
  providers: Provider[];        
  widgets: ThemeWidgetMap;      
  stylesGlobalSetup?(): void;  
}