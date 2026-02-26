import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponenteComponent } from './todo-list-componente.component';

describe('TodoListComponenteComponent', () => {
  let component: TodoListComponenteComponent;
  let fixture: ComponentFixture<TodoListComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
