import { Component, Input } from '@angular/core';
import { CardBtnComponent } from '../card-btn/card-btn.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CardBtnComponent, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() textoUm: string = '';
  @Input() textoDois: number = 0;
  msg: string = ''
  name: string = ''
  funcaoClique(valueEmited: string){
    this.msg = `Desconto aplicado   -    ${valueEmited}`
    setTimeout(() => {
      this.msg = ''
    }, 3000);
  }
}
