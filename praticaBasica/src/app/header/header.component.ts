import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo = "HEADER";
  alterarTexto(){
    this.titulo = "Texto alterado com sucesso."
  }
  voltarTexto(){
    this.titulo = "HEADER"
  }
}
