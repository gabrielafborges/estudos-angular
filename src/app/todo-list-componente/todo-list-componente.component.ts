import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-componente',
  imports: [FormsModule],
  templateUrl: './todo-list-componente.component.html',
  styleUrl: './todo-list-componente.component.css'
})



export class TodoListComponenteComponent {
  listTasks: { id: number; name: string; completed: boolean }[] = [];
  newTask = '';
  nextId = 0;

  addTask(){
    if(this.newTask !== ''){
      this.nextId++;
      const task = {
        id: this.nextId,
        name: this.newTask,
        completed: false
      };
      this.listTasks.push(task);
      this.newTask = '';
    }
  }
  taskCompleted(i:number){ 
    return this.listTasks[i].completed = !this.listTasks[i].completed;
  }
  removeTask(i:number){
    this.listTasks.splice(i,1);
    console.log(this.listTasks);
  }
}
