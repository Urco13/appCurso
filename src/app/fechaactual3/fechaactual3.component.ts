import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual3',
  template: `<p>{{ciudad | uppercase}}, {{ hoy | date: 'd/M/y'}} a las {{ hoy | date: 'H:m Z' }}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual3.component.css']
})

export class Fechaactual3Component {

 hoy = new Date();
 ciudad: string = 'Madrid';

}
