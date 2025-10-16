import { Injectable } from '@angular/core';
import { ThemePlugin } from '../public-api';

@Injectable({ providedIn: 'root' })
export class PackageLoaderService {

    public async loadPackage(theme: 'material' | 'bootstrap' | 'antd'): Promise<any> {
        try {
            switch (theme) {
                // case 'material': {
                //     // This path is the NPM package name
                //     const mod = await import('@prasanthsekar003/ngx-dynamic-form-material');
                //     return mod.default ?? this.fail('material');
                // }
                case 'bootstrap': {
                    const mod: any = await import('@prasanthsekar003/ngx-dynamic-form-bootstrap');
                    return mod.default ?? mod.THEME_PLUGIN ?? mod.registerTheme?.() ?? this.fail('bootstrap');
                }
                // case 'antd': {
                //     const mod = await import('@prasanthsekar003/ngx-dynamic-form-antd');
                //     return mod.default ?? this.fail('antd');
                // }
                default:
                    throw new Error(`[ngx-dynamic-form] Unknown theme "${theme}".`);
            }
        } catch (err) {
            // Most common cause: package not installed
            throw new Error(
                `[ngx-dynamic-form] Failed to load theme "${theme}". ` +
                `Is the package "ngx-dynamic-form-${theme}" installed?\n` +
                String(err)
            );
        }
    }

    private fail(name: string): never {
        throw new Error(`[ngx-dynamic-form] Theme "${name}" package loaded, but plugin API not found. ` +
            `Make sure it exports either "default", "THEME_PLUGIN", or "registerTheme()".`);
    }
}