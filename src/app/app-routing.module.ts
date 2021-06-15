import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WaiterMenuComponent } from './components/waiter-menu/waiter-menu.component';
import { ManageComponent } from './components/manage/manage.component';
import { StatusOrdersComponent } from './components/statusOrders/statusOrders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
  {
    path: 'waiter',
    component: WaiterMenuComponent,
  }, {
    path: 'statusOrders',
    component: StatusOrdersComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
