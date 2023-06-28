import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodosOverviewComponent } from './todo/todosOverview/todos-overview.component';
import { TodoComponent } from './todo/todosOverview/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddTodoFormComponent } from './todo/todosOverview/addTodoForm/add-todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './todo/todosOverview/state/todo.reducer';
import { TodoEffect } from './todo/todosOverview/state/todo.effect';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodoModule,
    MatCardModule,
    HttpClientModule,
    EffectsModule.forRoot(TodoEffect),
    StoreDevtoolsModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
