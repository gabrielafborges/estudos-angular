import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

//INFORMAÇÕES QUE O FILHO VAI RECEBER:
export class HeaderComponent {
  @Input() nome: string = "";
  @Input() preco: number = 0;
}
