import * as todoActions from "./todo.actions";
import { Todo } from "../todos.model";
import * as fromRoot from '../../../state/app-state';
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import { inject } from '@angular/core'
import { MatSnackBar } from "@angular/material/snack-bar";


export interface TodoState extends EntityState<Todo> {
    selectedTodoId: number | null,
    loading: boolean,
    loaded: boolean,
    error: string
};

export interface AppState extends fromRoot.AppState {
    todos: TodoState
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const defaultTodo: TodoState = {
    ids: [],
    entities: {},
    selectedTodoId: null,
    loading: false,
    loaded: false,
    error: ''
}

export const initalState: TodoState = todoAdapter.getInitialState(defaultTodo)

export function todoReducer(state = initalState, action: todoActions.TodoAction): TodoState {

    switch(action.type) {

        case todoActions.TodoActions.LOAD_TODOS_SUCCESS: {
            return todoAdapter.setAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
        case todoActions.TodoActions.LOAD_TODOS_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false,
                loaded: false
            };
        }

        case todoActions.TodoActions.LOAD_TODO_SUCCESS: {
            return todoAdapter.setOne(action.payload, {
                ...state,
                selectedTodoId: action.payload.id as number
            })
        }
        case todoActions.TodoActions.LOAD_TODO_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        case todoActions.TodoActions.CREATE_TODO_SUCCESS: {
            return todoAdapter.setOne(action.payload, state)
        }
        case todoActions.TodoActions.CREATE_TODO_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        case todoActions.TodoActions.UPDATE_TODO_SUCCESS: {
            return todoAdapter.updateOne(action.payload, state)
        }
        case todoActions.TodoActions.UPDATE_TODO_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        case todoActions.TodoActions.UPDATE_TODOS_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        case todoActions.TodoActions.DELETE_TODO_SUCCESS: {
            return todoAdapter.removeOne(action.payload, state)
        }
        case todoActions.TodoActions.DELETE_TODO_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

const getTodoFeatureState = createFeatureSelector<TodoState>(
    'todos'
    )

export const getTodos = createSelector(
    getTodoFeatureState,
    todoAdapter.getSelectors().selectAll
)
export const getTodosLoading = createSelector(
    getTodoFeatureState,
    (state: TodoState) => state.loading
)
export const getTodosLoaded = createSelector(
    getTodoFeatureState,
    (state: TodoState) => state.loaded
)
export const getTodosError = createSelector(
    getTodoFeatureState,
    (state: TodoState) => state.error
)

export const getCurrentTodoId = createSelector(
    getTodoFeatureState,
    (state: TodoState) => state.selectedTodoId
)
export const getCurrentTodo = createSelector(
    getTodoFeatureState,
    getCurrentTodoId,
    (state: TodoState) => state.entities[(state.selectedTodoId as number)]
)