import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-exs',
  imports: [],
  templateUrl: './rxjs-exs.component.html',
  styleUrl: './rxjs-exs.component.css',
})
export class RxjsExsComponent {
  ngOnInit() {
    // EXERCICIO 1:
    // const observable = new Observable<number>(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //     observer.next(2)
    //     observer.next(3)
    //     observer.next(4)
    //     observer.next(5)
    //   }, 1000)
    // });
    // observable.pipe(
    //   map((num ) => num * 2)
    // ).subscribe((value) => {
    //   console.log('numeros multiplicados: ', value);
    // })__________________________________________________________

    // EXERCICIO 2:
  //   const observable = new Observable<any>((observer) => {
  //     const nomes = [
  //       { nome: 'João', idade: 17 },
  //       { nome: 'Maria', idade: 22 },
  //       { nome: 'Pedro', idade: 15 },
  //       { nome: 'Ana', idade: 30 },
  //     ];
  //     observer.next(nomes.filter(nomeAtual => {
  //       return nomeAtual.nome === "Ana" || nomeAtual.nome === "Maria";
  //     }
  //   ));
  // });
  //   observable.pipe(
  //     map((listaComNomeFiltrado) => {
  //       return listaComNomeFiltrado.map((nomeFiltrado: any) => nomeFiltrado.nome);
  //     })
  //   ).subscribe((nomeTratado) => {
  //     console.log('NOME FILTRADO: ', nomeTratado);
  //   })__________________________________________________________

  
  // EXERCICIO 3
  interface IPessoa {
    nome: string,
    idade: number
  }
  const observable = new Observable<IPessoa[]>(observer => {
    const pessoas = [
      { nome: 'João', idade: 17 },
      { nome: 'Maria', idade: 22 },
      { nome: 'Ana', idade: 30 }
    ]
    observer.next(pessoas)
  })
  observable.pipe(
    map(listaDePessoas => {
      return listaDePessoas.map(nomes => nomes.nome);
   })
  ).subscribe(listaComNomes => {
    console.log('LISTA SÓ COM NOMES: ', listaComNomes)
  })














  }
}
