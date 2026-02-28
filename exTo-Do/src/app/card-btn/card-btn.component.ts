import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-btn',
  imports: [],
  templateUrl: './card-btn.component.html',
  styleUrl: './card-btn.component.css'
})
export class CardBtnComponent {
  @Output() btnClick = new EventEmitter<string>()
  
  botaoClicado(){
    this.btnClick.emit('PASSOU PRO PAI')
  }
}
