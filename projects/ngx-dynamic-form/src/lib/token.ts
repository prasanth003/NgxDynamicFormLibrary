import { InjectionToken } from '@angular/core';
import { ThemePlugin } from '../public-api';

export const ACTIVE_THEME = new InjectionToken<ThemePlugin>('ACTIVE_THEME');