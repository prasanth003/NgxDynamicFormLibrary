import { Component } from '@angular/core';
import { browserdetails } from 'src/content/browser.content';
import { feature } from 'src/content/feature.content';
import { iBrowser } from 'src/interface/browser.interface';
import { iFeature } from 'src/interface/feature.interface';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  public browserSupportDetails: iBrowser[] = browserdetails;
  
  public featureFullDetails: iFeature[] = feature;

}
