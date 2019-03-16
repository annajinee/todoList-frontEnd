import {Routes, RouterModule} from '@angular/router';
import {ToDoListComponent} from './todo/todolist.component';

const appRoutes: Routes = [

  {path: 'home', component: ToDoListComponent},
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
