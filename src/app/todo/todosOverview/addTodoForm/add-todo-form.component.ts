import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewTodo } from '../todos.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vs-hosting-todo-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
  newTodoText = '';

  @Output() newTodo = new EventEmitter<NewTodo>;

  constructor(){}

  ngOnInit(): void {}

  createTodo(){
    if (this.newTodoText){
      const newTodo: NewTodo = {
        text: this.newTodoText,
        completed: false,
        clientId: environment.clientId
      };
      this.newTodo.emit(newTodo);
      this.newTodoText = '';
    }
  }
}
