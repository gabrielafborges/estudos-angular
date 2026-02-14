import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
 produtos = [
  { id: 1, nome: 'Notebook', preco: 3000, imagem: '💻' },
  { id: 2, nome: 'Mouse', preco: 80, imagem: '🖱️' },
  { id: 3, nome: 'Teclado', preco: 200, imagem: '⌨️' },
  { id: 4, nome: 'Monitor', preco: 1200, imagem: '🖥️' },
  { id: 5, nome: 'Headset', preco: 350, imagem: '🎧' }
];
  constructor() { }
}
