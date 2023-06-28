import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTodo, Todo } from './todos.model';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}
  

  getAllTodos(): Observable<Todo[]>{  
    return this.http.get<Todo[]>(`${environment.apiUrl}/?clientId=${environment.clientId}`);
  }

  getTodoById(todoId: number): Observable<Todo>{
    return this.http.get<Todo>(`${environment.apiUrl}/${todoId}`);
  }
  
  addTodo(newTodo: NewTodo): Observable<Todo>{
    return this.http.post<Todo>(environment.apiUrl, newTodo);
  }

  updateTodo(updatedTodo: Todo): Observable<Todo>{
    return this.http.put<Todo>(`${environment.apiUrl}/${updatedTodo.id}`, updatedTodo);
  }

  deleteTodo(todoId: number){
    return this.http.delete(`${environment.apiUrl}/${todoId}`);
  }

  markAllTodosComplete(){
    return this.http.patch(`${environment.apiUrl}/mark-all-as-completed/?clientId=${environment.clientId}`, {});   
  }

}
