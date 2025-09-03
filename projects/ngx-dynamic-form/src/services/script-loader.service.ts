import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScriptLoaderService {
  private loadedScripts = new Set<string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadScripts(urls: string[]): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return Promise.resolve(); // SSR-safe

    const promises = urls.map((url) => {
      if (this.loadedScripts.has(url)) return Promise.resolve();

      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = () => {
          this.loadedScripts.add(url);
          resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    });

    return Promise.all(promises).then(() => void 0);
  }
}