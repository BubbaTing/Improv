import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { MenuComponent } from './menu/menu.component';

import { NamingactionPipe } from './namingaction.pipe';
import { UsersComponent } from './users/users.component';
import { ConnectionComponent } from './connection/connection.component'

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    MenuComponent,
    NamingactionPipe,
    UsersComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
