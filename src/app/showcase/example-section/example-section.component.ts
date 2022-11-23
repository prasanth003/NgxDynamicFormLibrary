import { Component, Input } from '@angular/core';
import { examples } from 'src/content/example.content';
import { iExample } from 'src/interface/example.interface';

@Component({
  selector: 'example-section',
  templateUrl: './example-section.component.html',
  styleUrls: ['./example-section.component.scss']
})
export class ExampleSectionComponent {
  @Input() public height: number = 300;
  public examples: iExample[] = examples;
}
