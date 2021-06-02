import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


//Angular material
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefComponent } from './components/chef/chef.component';
import { LoginComponent } from './components/login/login.component';

//services
import { AuthApiService } from './services/auth-api.service';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';


// services
@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    AdminComponent,
    ChefComponent,
    LoginComponent,
    CardComponent,
    OrderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule

  ],
  exports:[
    MatCardModule,
    MatTableModule
  ],
  providers: [AuthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
