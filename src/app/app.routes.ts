import { Route } from '@angular/router';
import { TodosOverviewComponent } from './todo/todosOverview/todos-overview.component';

export const appRoutes: Route[] = [
    { path: '', component: TodosOverviewComponent},
];
