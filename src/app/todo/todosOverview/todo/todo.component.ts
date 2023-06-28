import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos.model';


@Component({
  selector: 'vs-hosting-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class  TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() doneTodos: boolean  
  @Output() markAsDone = new EventEmitter<Todo>;
  @Output() editTodo = new EventEmitter<Todo>;
  @Output() deleteTodo = new EventEmitter<Todo>;
  
  
  editingText: boolean;
  todoText: string;

  ngOnInit(): void {
    this.todoText = this.todo.text;
  }

  changeStatus(){
    this.markAsDone.emit({...this.todo, completed: true});
  }

  editText(){
    this.editingText = true;
  }
  
  stopEditingText(){
    this.editingText = false;
    if(this.todo.text !== this.todoText){
      this.editTodo.emit({...this.todo, text: this.todoText});
    };
  }

  removeTodo(){
    this.deleteTodo.emit(this.todo);
  }
}
