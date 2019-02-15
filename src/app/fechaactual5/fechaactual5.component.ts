import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual5',
  template: `<p>La cotizacion actual del doles es de {{dolareuro | currency: 'EUR': true}}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual5.component.css']
})
export class Fechaactual5Component {

dolareuro: number = 0.88;

}
