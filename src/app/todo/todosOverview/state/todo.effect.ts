import { Injectable } from "@angular/core";
import * as todoActions from "../state/todo.actions" 
import { Todo } from "../todos.model";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../todo.service";
import { catchError, map, exhaustMap, of, tap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable()
export class TodoEffect {
    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private snackBar: MatSnackBar
    ) {}

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.LoadTodos>(
            todoActions.TodoActions.LOAD_TODOS
        ),
        exhaustMap(() => this.todoService.getAllTodos()
            .pipe(
                map((todos: Todo[]) => new todoActions.LoadTodosSuccess(todos)),
                catchError((error) => of(new todoActions.LoadTodosFail(error)))
            )
        )
    ));

    loadTodo$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.LoadTodo>(
            todoActions.TodoActions.LOAD_TODO
        ),
        exhaustMap((action: todoActions.LoadTodo) => this.todoService.getTodoById(action.payload)
            .pipe(
                map((todo: Todo) => new todoActions.LoadTodoSuccess(todo)),
                catchError((error) => of(new todoActions.LoadTodoFail(error)))
            )
        )
    ));

    createTodo$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.CreateTodo>(
            todoActions.TodoActions.CREATE_TODO
        ),
        exhaustMap((action: todoActions.CreateTodo) => this.todoService.addTodo(action.payload)
            .pipe(
                tap(() => this.snackBar.open('A new To-Do created', '', {duration: 2000})),
                map((newTodo: Todo) => new todoActions.CreateTodoSuccess((newTodo))),
                catchError((error) => of(new todoActions.CreateTodoFail(error)))
            )
        )
    ));
    
    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.UpdateTodo>(
            todoActions.TodoActions.UPDATE_TODO
        ),
        exhaustMap((action: todoActions.UpdateTodo) => this.todoService.updateTodo(action.payload)
            .pipe(
                tap(() => this.snackBar.open('To-Do updated', '', {duration: 2000})),
                map((updatedTodo: Todo) => new todoActions.UpdateTodoSuccess({
                    id: updatedTodo.id as number,
                    changes: updatedTodo
                })),
                catchError((error) => of(new todoActions.UpdateTodoFail(error)))
            )
        )
    ));
        
    updateTodos$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.UpdateTodos>(
            todoActions.TodoActions.UPDATE_TODOS
        ),
        exhaustMap((action: todoActions.UpdateTodos) => this.todoService.markAllTodosComplete()
            .pipe(
                tap(() => this.snackBar.open('All To-Dos marked as done', '', {duration: 2000})),
                map(() => new todoActions.LoadTodos()),
                catchError((error) => of(new todoActions.UpdateTodosFail(error)))
            )
        )
    ));

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType<todoActions.DeleteTodo>(
            todoActions.TodoActions.DELETE_TODO
        ),
        exhaustMap((action: todoActions.DeleteTodo) => this.todoService.deleteTodo(action.payload)
            .pipe(
                tap(() => this.snackBar.open('To-Do deleted', '', {duration: 2000})),
                map(() => new todoActions.DeleteTodoSuccess(action.payload)),
                catchError((error) => of(new todoActions.DeleteTodoFail(error)))
            )
        )
    ));
}