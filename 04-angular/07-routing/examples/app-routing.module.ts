import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';
import { ProductDetailComponent } from './product-detail.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminOverviewComponent } from './admin-overview.component';
import { AdminUsersComponent } from './admin-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent, 
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: AdminOverviewComponent },
      { path: 'users', component: AdminUsersComponent },
    ]
  },
  { path: '**', component: NotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
