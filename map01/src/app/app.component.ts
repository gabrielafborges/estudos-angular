import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableSimplesComponent } from './components/observable-simples/observable-simples.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ObservableSimplesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'map01';
}
