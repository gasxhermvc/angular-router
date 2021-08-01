import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [ErrorComponent, Error404Component],
  exports: [ErrorComponent, Error404Component],
  imports: [RouterModule, CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
