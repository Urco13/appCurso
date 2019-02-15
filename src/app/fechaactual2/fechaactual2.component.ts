import { Component} from '@angular/core';

@Component({
  selector: 'app-fechaactual2',
  template: `<p>Madrid, {{ hoy | date: 'd/M/y'}} a las {{ hoy | date: 'H:m Z' }}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual2.component.css']
})
export class Fechaactual2Component {

  hoy = new Date();
}
