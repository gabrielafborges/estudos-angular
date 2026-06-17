import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsExsComponent } from './components/rxjs-exs/rxjs-exs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsExsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mapAndFilterExercices';
}
