import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produto = 'Pc-Gamer';
  imgProduto = 'https://sm.ign.com/ign_br/screenshot/default/sdl-sanjaya-2rqomzlvxhc-unsplash_zzjn.jpg';
  preco = 1299.90;
  mensagemDeSucesso = '';
  comprarProduto(){
    this.mensagemDeSucesso = `${this.produto} adicionado ao carrinho!`;
  }
}
