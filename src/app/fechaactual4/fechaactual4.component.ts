import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual4',
  template: `<p>El resultado es {{ resultado | number: '3.2-2'}}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaactual4.component.css']
})
export class Fechaactual4Component implements OnInit {

resultado: number = 1.2;

}
