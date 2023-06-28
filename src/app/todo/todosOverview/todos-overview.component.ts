import { Component, OnInit } from '@angular/core';
import * as TodoActions from './state/todo.actions';
import { Store, select } from '@ngrx/store';
import { NewTodo, Todo } from './todos.model';
import * as todoReducer from './state/todo.reducer';

@Component({
  selector: 'vs-hosting-todo-todos-overview',
  templateUrl: './todos-overview.component.html',
  styleUrls: ['./todos-overview.component.scss'],
})
export class TodosOverviewComponent implements OnInit {
  pendingTodos: Todo[];
  doneTodos: Todo[];  

  constructor(private store: Store<todoReducer.AppState>){}

  ngOnInit(): void {
      this.store.dispatch(new TodoActions.LoadTodos())
      this.store.pipe(
        select(todoReducer.getTodos)
      ).subscribe((todos: Todo[]) => { 
        this.doneTodos = todos.filter((todo: Todo) => todo.completed)
        this.pendingTodos = todos.filter((todo: Todo) => !todo.completed)
      })
  }

  createTodo(newTodo: NewTodo){
    this.store.dispatch(new TodoActions.CreateTodo(newTodo))
  }
  markTodoDone(todo: Todo){
    this.store.dispatch(new TodoActions.UpdateTodo(todo))
  }
  editTodo(editedTodo: Todo){
    this.store.dispatch(new TodoActions.UpdateTodo(editedTodo))
  }
  deleteTodo(todoToDelete: Todo){
    this.store.dispatch(new TodoActions.DeleteTodo(todoToDelete.id))
  }
  markAllDone(){
    this.store.dispatch(new TodoActions.UpdateTodos())
  }
}
