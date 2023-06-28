export interface Todo {
    id: number;
    clientId: string;
    completed: boolean;
    text: string;
}

export type NewTodo = Omit<Todo, 'id'>;