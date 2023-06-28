import { Action } from "@ngrx/store";
import { NewTodo, Todo } from "../todos.model";
import { Update } from "@ngrx/entity";


export enum TodoActions {
    LOAD_TODOS = '[TODO] Load Todos',
    LOAD_TODOS_SUCCESS = '[TODO] Load Todos Success',
    LOAD_TODOS_FAIL = '[TODO] Load Todos Failed',
    LOAD_TODO = '[TODO] Load Todo',
    LOAD_TODO_SUCCESS = '[TODO] Load Todo Success',
    LOAD_TODO_FAIL = '[TODO] Load Todo Failed',
    CREATE_TODO = '[TODO] Create Todo',
    CREATE_TODO_SUCCESS = '[TODO] Create Todo Success',
    CREATE_TODO_FAIL = '[TODO] Create Todo Failed',
    UPDATE_TODOS = '[TODO] Update Todos',
    UPDATE_TODOS_SUCCESS = '[TODO] Update Todos Success',
    UPDATE_TODOS_FAIL = '[TODO] Update Todos Failed',
    UPDATE_TODO = '[TODO] Update Todo',
    UPDATE_TODO_SUCCESS = '[TODO] Update Todo Success',
    UPDATE_TODO_FAIL = '[TODO] Update Todo Failed',
    DELETE_TODO = '[TODO] Delete Todo',
    DELETE_TODO_SUCCESS = '[TODO] Delete Todo Success',
    DELETE_TODO_FAIL = '[TODO] Delete Todo Failed',
}

export class LoadTodos implements Action {
    readonly type = TodoActions.LOAD_TODOS
}
export class LoadTodosSuccess implements Action {
    readonly type = TodoActions.LOAD_TODOS_SUCCESS
    
    constructor(public payload: Todo[]){}
}
export class LoadTodosFail implements Action {
    readonly type = TodoActions.LOAD_TODOS_FAIL
    
    constructor(public payload: string){}
}
export class LoadTodo implements Action {
    readonly type = TodoActions.LOAD_TODO
    
    constructor(public payload: number){}
}
export class LoadTodoSuccess implements Action {
    readonly type = TodoActions.LOAD_TODO_SUCCESS
    
    constructor(public payload: Todo){}
}
export class LoadTodoFail implements Action {
    readonly type = TodoActions.LOAD_TODO_FAIL
    
    constructor(public payload: string){}
}
export class CreateTodo implements Action {
    readonly type = TodoActions.CREATE_TODO
    
    constructor(public payload: NewTodo){}
}
export class CreateTodoSuccess implements Action {
    readonly type = TodoActions.CREATE_TODO_SUCCESS
    
    constructor(public payload: Todo){}
}
export class CreateTodoFail implements Action {
    readonly type = TodoActions.CREATE_TODO_FAIL
    
    constructor(public payload: string){}
}
export class UpdateTodo implements Action {
    readonly type = TodoActions.UPDATE_TODO

    constructor(public payload: Todo){}
}
export class UpdateTodoSuccess implements Action {
    readonly type = TodoActions.UPDATE_TODO_SUCCESS
    
    constructor(public payload: Update<Todo>){}
}
export class UpdateTodoFail implements Action {
    readonly type = TodoActions.UPDATE_TODO_FAIL
    
    constructor(public payload: string){}
}
export class UpdateTodos implements Action {
    readonly type = TodoActions.UPDATE_TODOS
}
export class UpdateTodosSuccess implements Action {
    readonly type = TodoActions.UPDATE_TODOS_SUCCESS   
}
export class UpdateTodosFail implements Action {
    readonly type = TodoActions.UPDATE_TODOS_FAIL
    
    constructor(public payload: string){}
}
export class DeleteTodo implements Action {
    readonly type = TodoActions.DELETE_TODO

    constructor(public payload: number){}
}
export class DeleteTodoSuccess implements Action {
    readonly type = TodoActions.DELETE_TODO_SUCCESS
    
    constructor(public payload: number){}
}
export class DeleteTodoFail implements Action {
    readonly type = TodoActions.DELETE_TODO_FAIL
    
    constructor(public payload: string){}
}

export type TodoAction = LoadTodos | LoadTodosSuccess | LoadTodosFail | 
                         LoadTodo | LoadTodoSuccess | LoadTodoFail |
                         CreateTodo | CreateTodoSuccess | CreateTodoFail |
                         UpdateTodo | UpdateTodoSuccess | UpdateTodoFail |
                         UpdateTodos | UpdateTodosSuccess | UpdateTodosFail |
                         DeleteTodo | DeleteTodoSuccess | DeleteTodoFail