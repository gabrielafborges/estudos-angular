import { Component } from '@angular/core';
import { TodoListComponenteComponent } from './todo-list-componente/todo-list-componente.component';

@Component({
  selector: 'app-root',
  imports: [TodoListComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoTo-Do';
}
