import {Routes, RouterModule} from '@angular/router';
import {PostuserinfoComponent} from "./taskInfo/taskInfo.component";

const appRoutes: Routes = [

  {path: 'home', component: PostuserinfoComponent},
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
