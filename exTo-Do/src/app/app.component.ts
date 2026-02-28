import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nomeInput: string = 'FIFA 2026';
  subtitulo: number =  299.90
}
