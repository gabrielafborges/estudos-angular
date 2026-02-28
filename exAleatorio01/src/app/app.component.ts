import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BtnComponent } from './btn/btn.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//INFORMAÇÕES QUE O PAI VAI ENVIAR:
export class AppComponent {
  produtoNome = "Notebook";
  produtoPreco = 4500
   buttonClicked(valueEmitted: boolean){
    console.log(`Clicou app.compo`, valueEmitted);
  }
}
