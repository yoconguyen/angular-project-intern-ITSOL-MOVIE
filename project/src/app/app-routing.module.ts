import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormadminComponent } from './formadmin/formadmin.component';
import { SearchComponent } from './search/search.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';

const routes: Routes = [
  
  {path:'trangchu', component:TrangchuComponent},
  {path:'search', component:SearchComponent},
  {path:'viewmovie', component:ViewmovieComponent},
  {path:'formadmin', component:FormadminComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
