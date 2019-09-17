import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import { NewComponent} from './new/new.component';
import { EditComponent} from './edit/edit.component';
import { ViewComponent} from './view/view.component';

const routes: Routes = [
  {path :'', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
