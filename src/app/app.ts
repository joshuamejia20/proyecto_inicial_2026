import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados";
import { Empleado } from './empleado/empleado';
import { EmpleadoFeo } from './empleado-feo/empleado-feo';

@Component({
  selector: 'app-root',
  imports: [EmpleadosComponent, Empleado, EmpleadoFeo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('primera_app');
  titulo = "app de Ricardo";
}
