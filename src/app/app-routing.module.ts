import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component:LoginComponent
  },
  {
    path : 'create',
    pathMatch : 'full',
    component:MemberFormComponent
  },
  {
    path : 'dashboard',
    pathMatch : 'full',
    component:DashboardComponent
  },
  {
    path : 'tools',
    pathMatch : 'full',
    component:ToolsComponent
  },
  {
    path : 'articles',
    pathMatch : 'full',
    component:ArticlesComponent
  },
  {
    path : 'events',
    pathMatch : 'full',
    component:EventsComponent
  },
  {
    path : 'member',
    pathMatch : 'full',
    component:MemberComponent
  },
  {
    path : ':id/edit',
    pathMatch : 'full',
    component:MemberFormComponent
  },
  {
    path : '**',
    
    component:MemberComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
