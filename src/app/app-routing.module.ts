import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'admin/blog', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
