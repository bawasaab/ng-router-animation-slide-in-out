import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserMasterComponent } from './user-master/user-master.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
    data: { num: 1 }
  },
  {
    path: 'user-master',
    component: UserMasterComponent,
    data: { num: 5 }
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
