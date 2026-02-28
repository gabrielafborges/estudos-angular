import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
 @Output(`buttonClick`) buttonClickEmitter = new EventEmitter<boolean>(); 
 clicou(){
  this.buttonClickEmitter.emit(true);
 }
}
