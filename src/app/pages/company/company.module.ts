import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { JobModule } from './job/job.module';

@NgModule({
  declarations: [CompanyComponent],
  exports: [CompanyComponent],
  imports: [RouterModule, CommonModule, CompanyRoutingModule, JobModule],
})
export class CompanyModule {}
