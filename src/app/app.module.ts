import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobLayoutModule } from './layouts/job-layout/job-layout.module';
import { CompanyModule } from './pages/company/company.module';
import { ErrorModule } from './pages/error/error.module';
import { HomeModule } from './pages/home/home.module';
import { SearchModule } from './pages/search/search.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    JobLayoutModule,
    HomeModule,
    SearchModule,
    CompanyModule,
    ErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
