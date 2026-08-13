import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-feo',
  imports: [],
  template: `<p class="texto">Juan Carlos...</p>`,
  styles: `
    .texto{
      color: green;
    }
  `,
})
export class EmpleadoFeo {}
