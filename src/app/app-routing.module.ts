import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [{
  path: 'home',
  component: MenuComponent
},{
  path: 'result',
  component: ResultComponent
},{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
