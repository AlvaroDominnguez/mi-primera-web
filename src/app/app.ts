import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './components/componente1/componente1';
import { Cabercera } from './components/cabercera/cabercera';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1,Cabercera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-web');
}
