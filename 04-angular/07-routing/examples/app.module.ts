import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminOverviewComponent } from './admin-overview.component';
import { AdminUsersComponent } from './admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProductListComponent,
    AdminDashboardComponent,
    AdminOverviewComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add your routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
