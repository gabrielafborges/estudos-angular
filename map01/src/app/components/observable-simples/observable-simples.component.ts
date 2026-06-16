import { Component, inject } from '@angular/core';
import { ObservableServiceService } from '../../services/observable-service.service';
import { filter, map, Observable } from 'rxjs';

interface ITodosCard {
  title: string,
}

@Component({
  selector: 'app-observable-simples',
  imports: [],
  templateUrl: './observable-simples.component.html',
  styleUrl: './observable-simples.component.css'
})
export class ObservableSimplesComponent {
  private obsService = inject(ObservableServiceService);
  public cardTitles: ITodosCard[] = [];

  ngOnInit() {
    // this.obsService.getTodo().pipe(
    //   map((completeResponse) => {
    //     const responseWithTitleOnly = {
    //       title: completeResponse.title
    //     }
    //     console.log(completeResponse);
        
    //     return responseWithTitleOnly;
    //   })
    // ).subscribe({
    //   next: (transformedResponse) => {
    //     this.cardTitles.push(transformedResponse)
    //     console.log('next:',transformedResponse);
    //   },
    //   error: transformedResponseError => console.error(transformedResponseError)
    // })

    const obs = new Observable(observer => {
      setTimeout(()=>{
        observer.next('Gabriel');
        observer.next('Ana');
        observer.next('Maria');
        observer.next('Ana');
        observer.next('joao');
      }, 1000)
    })
    obs.pipe(
      filter(nome => nome === 'Ana'),
      map(filterResult => filterResult.toLocaleUpperCase())
    ).subscribe((value) => {
      console.log('valor emitido que corresponde o filtro:\n', value);
    })

  }
}
