import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { todoReducer } from './todosOverview/state/todo.reducer';
import { TodoComponent } from './todosOverview/todo/todo.component';
import { TodosOverviewComponent } from './todosOverview/todos-overview.component';
import { AddTodoFormComponent } from './todosOverview/addTodoForm/add-todo-form.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodosOverviewComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    StoreModule.forFeature('todos', todoReducer)
  ]
})
export class TodoModule { }
