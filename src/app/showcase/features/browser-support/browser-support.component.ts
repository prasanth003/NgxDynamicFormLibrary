import { Component, Input } from '@angular/core';
import { iBrowser } from 'src/interface/browser.interface';
@Component({
  selector: 'browser-support',
  templateUrl: './browser-support.component.html',
  styleUrls: ['./browser-support.component.scss']
})
export class BrowserSupportComponent {

  @Input() browserSupport: iBrowser[] = [];
  
      
}
