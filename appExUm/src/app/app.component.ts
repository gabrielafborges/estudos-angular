import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'appExUm';
  numero = 0;
  constructor(private cdr: ChangeDetectorRef) {}
  adicionar(){
    this.numero++;
  }
  diminuir(){
    this.numero--;
  }
  resetar(){
    this.numero = 0;
  }
}