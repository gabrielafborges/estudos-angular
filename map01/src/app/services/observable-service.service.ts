import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface ITodoInfosResponse {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {
  private http = inject(HttpClient);
  constructor() { }

  getTodo(): Observable<ITodoInfosResponse>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos");
  }
}
