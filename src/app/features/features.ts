import { Component, Input } from '@angular/core';

@Component({
  selector: 'features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {

  @Input() public height: number = 400;

}
